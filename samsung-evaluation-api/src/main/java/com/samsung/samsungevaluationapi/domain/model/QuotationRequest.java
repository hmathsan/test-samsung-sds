package com.samsung.samsungevaluationapi.domain.model;

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
public class QuotationRequest {

    CurrencyCode fromCurrencyCode;
    CurrencyCode toCurrencyCode;
    BigDecimal cotacao;
    LocalDate dataHoraCotacao;
}
