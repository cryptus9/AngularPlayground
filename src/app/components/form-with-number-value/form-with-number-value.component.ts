import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AllowOnlyNumberDirective } from './allow-only-number.directive';

@Component({
  selector: 'app-form-with-number-value',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AllowOnlyNumberDirective,
  ],
  templateUrl: './form-with-number-value.component.html',
  styleUrl: './form-with-number-value.component.less'
})
export class FormWithNumberValueComponent implements OnInit {

  public control = new FormControl<number>(0)

  ngOnInit(): void {
    this.control.events.subscribe(value => {
      console.log('value', value)
      console.log('typeof value', typeof value)
    })
  }

}
