import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule, MatDateRangeInput } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-reset-datepicker',
  templateUrl: './reset-datepicker.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetDatepickerComponent implements OnInit {

  public dateRangeForm: FormGroup | null = null;

  constructor(private fb: FormBuilder) {}

  @ViewChild('picker') picker: MatDatepicker<Date> | null = null;

  ngOnInit(){
    this.picker?.stateChanges.subscribe(() => console.log('picker state changes' ));
    this.dateRangeForm = this.fb.group({
      startDate: [null],
      endDate: [null],
    });
  }

  resetDateRange() {
    console.log('picker', this.picker);
    console.log('date range form', this.dateRangeForm?.getRawValue());
    this.dateRangeForm?.reset();
    console.log('date range form after reset', this.dateRangeForm?.getRawValue());
  }

}
