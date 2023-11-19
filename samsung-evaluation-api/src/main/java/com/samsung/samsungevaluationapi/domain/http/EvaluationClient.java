package com.samsung.samsungevaluationapi.domain.http;

import com.samsung.samsungevaluationapi.domain.model.CurrencyRequest;
import com.samsung.samsungevaluationapi.domain.model.DocumentsRequest;
import com.samsung.samsungevaluationapi.domain.model.QuotationRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "evaluation")
public interface EvaluationClient {

    @RequestMapping(method = RequestMethod.GET, value = "/currency")
    List<CurrencyRequest> getCurrencies();

    @RequestMapping(method = RequestMethod.GET, value = "/quotation")
    List<QuotationRequest> getQuotation();

    @RequestMapping(method = RequestMethod.GET, value = "/docs")
    List<DocumentsRequest> getDocuments();
}
