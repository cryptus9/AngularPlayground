import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ScrollTableFixColumnComponent } from './components/scroll-table-fix-column/scroll-table-fix-column.component';
import { FormWithNumberValueComponent } from './components/form-with-number-value/form-with-number-value.component';
import { ResetDatepickerComponent } from './components/reset-datepicker/reset-datepicker.component';
import { DecimalInputComponent } from './components/decimal-input/decimal-input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NgClass, ScrollTableFixColumnComponent, FormWithNumberValueComponent,
    ResetDatepickerComponent, DecimalInputComponent, AutocompleteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}


