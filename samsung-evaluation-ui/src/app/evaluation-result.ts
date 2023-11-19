import {CurrencyCode} from "./currency-code";

export class EvaluationResult {
  private _documentNumber: bigint;
  private _documentDate: string;
  private _currencyCode: CurrencyCode;
  private _currencyDesc: string;
  private _documentValue: number;
  private _valueUsd: number;
  private _valuePen: number;
  private _valueBrl: number;

  constructor(documentNumber: bigint, documentDate: string, currencyCode: CurrencyCode, currencyDesc: string, documentValue: number, valueUsd: number, valuePen: number, valueBrl: number) {
    this._documentNumber = documentNumber;
    this._documentDate = documentDate;
    this._currencyCode = currencyCode;
    this._currencyDesc = currencyDesc;
    this._documentValue = documentValue;
    this._valueUsd = valueUsd;
    this._valuePen = valuePen;
    this._valueBrl = valueBrl;
  }


  get documentNumber(): bigint {
    return this._documentNumber;
  }

  set documentNumber(value: bigint) {
    this._documentNumber = value;
  }

  get documentDate(): string {
    return this._documentDate;
  }

  set documentDate(value: string) {
    this._documentDate = value;
  }

  get currencyCode(): CurrencyCode {
    return this._currencyCode;
  }

  set currencyCode(value: CurrencyCode) {
    this._currencyCode = value;
  }

  get currencyDesc(): string {
    return this._currencyDesc;
  }

  set currencyDesc(value: string) {
    this._currencyDesc = value;
  }

  get documentValue(): number {
    return this._documentValue;
  }

  set documentValue(value: number) {
    this._documentValue = value;
  }

  get valueUsd(): number {
    return this._valueUsd;
  }

  set valueUsd(value: number) {
    this._valueUsd = value;
  }

  get valuePen(): number {
    return this._valuePen;
  }

  set valuePen(value: number) {
    this._valuePen = value;
  }

  get valueBrl(): number {
    return this._valueBrl;
  }

  set valueBrl(value: number) {
    this._valueBrl = value;
  }
}
