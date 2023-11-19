import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatTable, MatTableModule} from "@angular/material/table";
import {EvaluationResult} from "../evaluation-result";

@Component({
  selector: 'app-evaluation-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './evaluation-results.component.html',
  styleUrl: './evaluation-results.component.css'
})
export class EvaluationResultsComponent implements OnChanges {
  displayedColumns: string[] = [
    "documentNumber", "documentDate", "currencyCode", "currencyCode",
    "documentValue", "valueUsd", "valuePen", "valueBrl"
  ]

  @Input() dataSource: EvaluationResult[] = []
  @ViewChild(MatTable) table!: MatTable<EvaluationResult>;

  ngOnChanges(changes: SimpleChanges) {
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

}
