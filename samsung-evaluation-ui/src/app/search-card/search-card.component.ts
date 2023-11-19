import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {EvaluationResult} from "../evaluation-result";
import {QuotationService} from "../quotation.service";
import {CurrencyCode} from "../currency-code";
import {HttpErrorResponse} from "@angular/common/http";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule
  ],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  currencies: [CurrencyCode, string][] = [
    [CurrencyCode.USD, "Dolar"],
    [CurrencyCode.PEN, "Soles Peruano"],
    [CurrencyCode.BRL, "Real"]
  ]

  documentNumber = new FormControl('')
  currency = new FormControl<CurrencyCode | null>(null)
  startDate = new FormControl<Date | null>(null)
  endDate = new FormControl<Date | null>(null)

  searchForm = new FormGroup({
    documentNumber: this.documentNumber,
    currency: this.currency,
    startDate: this.startDate,
    endDate: this.endDate
  })

  @Output() updateDataSourceEvent = new EventEmitter<Array<EvaluationResult>>();

  constructor(private client: QuotationService) {
  }

  isLoading: boolean = false

  onSubmit() {
    this.isLoading = true;

    let quotation = this.client.getQuotation(
      this.documentNumber.getRawValue(),
      this.currency.getRawValue(),
      this.startDate.getRawValue(),
      this.endDate.getRawValue()
    );

    quotation.subscribe({
      next: (response) => {
        this.updateDataSourceEvent.emit(response)
        this.isLoading = false
      },
      error: (error: HttpErrorResponse) => {
        console.log("error trying to fetch external api")
        console.error(error)
        this.isLoading = false
      }
    });
  }

  clearFields() {
    this.documentNumber.reset()
    this.currency.reset()
    this.startDate.reset()
    this.endDate.reset()
  }
}
