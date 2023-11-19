package com.samsung.samsungevaluationapi.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CurrencyRequest {
    Integer currencyId;
    CurrencyCode currencyCode;
    String currencyDesc;
}
