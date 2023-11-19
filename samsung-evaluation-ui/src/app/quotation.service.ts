import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {CurrencyCode} from "./currency-code";
import {EvaluationResult} from "./evaluation-result";
import {catchError, last, Observable, ObservableInput, retry, Subscription} from "rxjs";
import {tap} from "node:test/reporters";

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  url: string = "http://localhost:8080/search-evaluation"

  constructor(private http: HttpClient) { }

  getQuotation(
    documentNumber: string | null,
    currency: CurrencyCode | null,
    startDate: Date | null,
    endDate: Date | null
  ): Observable<EvaluationResult[]> {
    let params: HttpParams = new HttpParams();

    if (documentNumber != '') params = params.append("documentNumber", documentNumber!);
    if (currency != null) params = params.append("currencyCode", currency);
    if (startDate != null) params = params.append("startDate", startDate.toISOString().split("T")[0].toString())
    if (endDate != null) params = params.append("endDate", endDate.toISOString().split("T")[0].toString())

    return this.http.get<EvaluationResult[]>(
      this.url,
      {
        observe: "body",
        responseType: "json",
        params: params,
        headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
      }
    )
  }
}
