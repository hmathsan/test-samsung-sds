package com.samsung.samsungevaluationapi.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DocumentsRequest {
    Integer documentId;
    String documentNumber;
    String notaFiscal;
    LocalDate documentDate;
    BigDecimal documentValue;
    CurrencyCode currencyCode;
}

