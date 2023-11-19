import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuotationServiceService {

  constructor(private http: HttpClient) { }
}
