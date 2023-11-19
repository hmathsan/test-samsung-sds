package com.samsung.samsungevaluationapi.app.dto;

import com.samsung.samsungevaluationapi.domain.model.CurrencyCode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchEvaluationResponse {
    String documentNumber;
    LocalDate documentDate;
    CurrencyCode currencyCode;
    String currencyDesc;
    BigDecimal documentValue;
    BigDecimal valueUsd;
    BigDecimal valuePen;
    BigDecimal valueBrl;
}
