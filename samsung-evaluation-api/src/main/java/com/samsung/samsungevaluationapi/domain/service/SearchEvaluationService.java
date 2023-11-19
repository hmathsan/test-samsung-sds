package com.samsung.samsungevaluationapi.domain.service;

import com.samsung.samsungevaluationapi.app.dto.SearchEvaluationResponse;
import com.samsung.samsungevaluationapi.domain.http.EvaluationClient;
import com.samsung.samsungevaluationapi.domain.model.CurrencyCode;
import com.samsung.samsungevaluationapi.domain.model.CurrencyRequest;
import com.samsung.samsungevaluationapi.domain.model.DocumentsRequest;
import com.samsung.samsungevaluationapi.domain.model.QuotationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class SearchEvaluationService {

    private static final String DOCUMENT_NUMBER_KEY = "documentNumber";
    private static final String CURRENCY_CODE_KEY = "currencyCode";
    private static final String START_DATE_KEY = "startDate";
    private static final String END_DATE_KEY = "endDate";

    EvaluationClient client;

    @Autowired
    public SearchEvaluationService(EvaluationClient client) {
        this.client = client;
    }

    public List<SearchEvaluationResponse> searchEvaluation(Map<String, String> params) {
        Map<CurrencyCode, String> currencies = client.getCurrencies().stream()
                .collect(Collectors.toMap(CurrencyRequest::getCurrencyCode, CurrencyRequest::getCurrencyDesc));
        Map<String, DocumentsRequest> documents = client.getDocuments().stream()
                .collect(Collectors.toMap(DocumentsRequest::getDocumentNumber, Function.identity()));
        List<QuotationRequest> quotation = client.getQuotation();

        if (params.containsKey(DOCUMENT_NUMBER_KEY)) {
            documents = documents.entrySet().stream()
                    .filter(map -> map.getKey().equals(params.get(DOCUMENT_NUMBER_KEY)))
                    .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
        }

        if (params.containsKey(CURRENCY_CODE_KEY) && CurrencyCode.isCurrencyCode(params.get(CURRENCY_CODE_KEY))) {
            CurrencyCode currencyCode = CurrencyCode.valueOf(params.get(CURRENCY_CODE_KEY));
            documents = documents.entrySet().stream()
                    .filter(map -> map.getValue().getCurrencyCode().equals(currencyCode))
                    .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
        }

        LocalDate startDate = params.containsKey(START_DATE_KEY) ?
                LocalDate.parse(params.get(START_DATE_KEY)) : LocalDate.MIN;
        LocalDate endDate = params.containsKey(END_DATE_KEY) ?
                LocalDate.parse(params.get(END_DATE_KEY)) : LocalDate.MAX;

        documents = documents.entrySet().stream()
                .filter(map -> !(
                        map.getValue().getDocumentDate().isBefore(startDate) &&
                                map.getValue().getDocumentDate().isAfter(endDate)
                )).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        return documents.entrySet().stream().map(map -> {
            DocumentsRequest document = map.getValue();

            SearchEvaluationResponse response = new SearchEvaluationResponse();
            response.setDocumentNumber(map.getKey());
            response.setDocumentDate(document.getDocumentDate());
            response.setCurrencyCode(document.getCurrencyCode());
            response.setCurrencyDesc(currencies.get(document.getCurrencyCode()));
            response.setDocumentValue(document.getDocumentValue());
            response.setValueUsd(convertValue(
                    document.getCurrencyCode(), CurrencyCode.USD, quotation, document.getDocumentValue(), document.getDocumentDate()
            ));
            response.setValuePen(convertValue(
                    document.getCurrencyCode(), CurrencyCode.PEN, quotation, document.getDocumentValue(), document.getDocumentDate()
            ));
            response.setValueBrl(convertValue(
                    document.getCurrencyCode(), CurrencyCode.BRL, quotation, document.getDocumentValue(), document.getDocumentDate()
            ));

            return response;
        }).collect(Collectors.toList());
    }

    private BigDecimal convertValue(
            CurrencyCode fromCurrencyCode, CurrencyCode toCurrencyCode,
            List<QuotationRequest> quotation, BigDecimal documentValue, LocalDate documentDate
    ) {
        if (fromCurrencyCode.equals(toCurrencyCode)) return documentValue;

        QuotationRequest quotationToConvert = findQuotation(fromCurrencyCode, toCurrencyCode, quotation, documentDate);

        return documentValue.multiply(quotationToConvert.getCotacao());

    }

    private QuotationRequest findQuotation(
            CurrencyCode fromCurrencyCode, CurrencyCode toCurrencyCode, List<QuotationRequest> quotation, LocalDate documentDate
    ) {
        List<QuotationRequest> possibleQuotations = quotation.stream()
                .filter(q ->
                        q.getFromCurrencyCode().equals(fromCurrencyCode) &&
                                q.getToCurrencyCode().equals(toCurrencyCode)
                ).toList();

        QuotationRequest quotationToConvert = null;

        for (QuotationRequest q : possibleQuotations) {
            if (q.getDataHoraCotacao().equals(documentDate)) {
                quotationToConvert = q;
                break;
            }
        }

        if (Objects.isNull(quotationToConvert)) {
            quotationToConvert = possibleQuotations.stream().max(Comparator
                    .comparing(QuotationRequest::getDataHoraCotacao)).orElseThrow(IllegalArgumentException::new);
        }

        return quotationToConvert;
    }
}
