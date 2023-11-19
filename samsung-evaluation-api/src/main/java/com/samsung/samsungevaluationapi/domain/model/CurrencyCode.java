package com.samsung.samsungevaluationapi.domain.model;

public enum CurrencyCode {
    USD,
    PEN,
    BRL;

    public static boolean isCurrencyCode(String value) {
        try {
            CurrencyCode.valueOf(value);
            return true;
        } catch (IllegalArgumentException | NullPointerException e) {
            return false;
        }
    }
}
