import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatTable, MatTableModule} from "@angular/material/table";

enum CurrencyCode {
  USD = "USD",
  PEN = "PEN",
  BRL = "BRL"
}

export interface EvaluationResults {
  documentNumber: bigint,
  documentDate: string,
  currencyCode: CurrencyCode,
  currencyDesc: string,
  documentValue: number,
  valueUsd: number,
  valuePen: number,
  valueBrl: number
}

@Component({
  selector: 'app-evaluation-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './evaluation-results.component.html',
  styleUrl: './evaluation-results.component.css'
})
export class EvaluationResultsComponent {
  displayedColumns: string[] = [
    "documentNumber", "documentDate", "currencyCode", "currencyCode",
    "documentValue", "valueUsd", "valuePen", "valueBrl"
  ]

  dataSource: EvaluationResults[] = []

  constructor(@ViewChild(MatTable) table: MatTable<EvaluationResults>) {}

}
