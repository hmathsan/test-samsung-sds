package com.samsung.samsungevaluationapi.app.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.samsung.samsungevaluationapi.cross.serializer.BigDecimalSerializer;
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

    @JsonSerialize(using = BigDecimalSerializer.class)
    BigDecimal documentValue;

    @JsonSerialize(using = BigDecimalSerializer.class)
    BigDecimal valueUsd;

    @JsonSerialize(using = BigDecimalSerializer.class)
    BigDecimal valuePen;

    @JsonSerialize(using = BigDecimalSerializer.class)
    BigDecimal valueBrl;
}
