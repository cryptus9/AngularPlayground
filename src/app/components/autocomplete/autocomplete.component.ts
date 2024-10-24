import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryListFilterPipe } from './country-list.pipe';
import { CommonModule } from '@angular/common';
import { Country } from './country.type';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CountryListFilterPipe,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.less'
})
export class AutocompleteComponent {
// REACTIVE FORM
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    numberOfPeople: new FormControl(''),
    phonePrefix: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  // DATEPICKER
  // ...

  // MANAGE COUNTRIES
  countries: Country[] = [];
  filteredCountries: any[] = [];
  selectedCountryImage: string | null = null;
  highlightedCountry: any;
  showDropdown = signal<boolean>(false);
  i: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.countries = [
      {name: 'germany', dialCodes: '+49', image: null},
      {name: 'france', dialCodes: '+48', image: null},
      {name: 'italy', dialCodes: '+47', image: null},
      {name: 'swiss', dialCodes: '+39', image: null},
    ];
  }

  // DROPDOWN
  onFocus(): void {
    this.showDropdown.set(true); // Show all countries on focus
  }

  onBlur(): void {
    // Hide dropdown after a short delay to allow clicks
    setTimeout(() => {
      this.showDropdown.set(false);
    }, 500);
  }

  // Find country and update flag
  onPrefixSelect(dialCode: string): void {
    console.log('dialCode', dialCode);
    this.profileForm.controls.phonePrefix.setValue(dialCode);

    const selectedCountry = this.countries.find(
      (country) => country.dialCodes === dialCode // Use comparison, not assignment
    );
    this.selectedCountryImage = selectedCountry ? selectedCountry.image : null; // Set image if found
    this.showDropdown.set(false); // Hide dropdown after selection
  }

  onPrefixClear(): void {
    this.selectedCountryImage = null;
  }

  validateNumber(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const isNumberKey = /^[0-9]$/.test(event.key);
    const isPlusKey = event.key === '+';

    if (!isNumberKey && !isPlusKey && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
