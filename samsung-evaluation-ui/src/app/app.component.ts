import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SearchCardComponent} from "./search-card/search-card.component";
import {EvaluationResultsComponent} from "./evaluation-results/evaluation-results.component";
import {EvaluationResult} from "./evaluation-result";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchCardComponent, EvaluationResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'samsung-evaluation-ui';

  dataSource: EvaluationResult[] = [];

  updateDataSource(dataSource: EvaluationResult[]) {
    this.dataSource = dataSource;
  }
}
