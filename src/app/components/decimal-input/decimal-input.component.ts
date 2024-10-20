import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AllowDecimalsDirective } from './allow-decimals.directive';

@Component({
  selector: 'app-decimal-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AllowDecimalsDirective
  ],
  templateUrl: './decimal-input.component.html',
  styleUrl: './decimal-input.component.less'
})
export class DecimalInputComponent {

  public form = new FormGroup({
    currency: new FormControl<number>(0)
  })

}
