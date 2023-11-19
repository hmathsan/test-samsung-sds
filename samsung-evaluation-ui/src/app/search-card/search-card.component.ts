import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

interface Currency {
  currencyCode: string;
  title: string;
}

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  currencies: Currency[] = [
    {currencyCode: "USD", title: "Dolar"},
    {currencyCode: "PEN", title: "Soles Peruano"},
    {currencyCode: "BRL", title: "Real"}
  ]

  searchForm = new FormGroup({
    documentNumber: new FormControl(''),
    currency: new FormControl<Currency | null>(null),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null)
  })

  onSubmit() {
    console.log(this.searchForm.value.documentNumber);
    console.log(this.searchForm.value.currency);
    console.log(this.searchForm.value.startDate);
    console.log(this.searchForm.value.endDate)
  }
}
