import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country.type';

@Pipe({
  name: 'countryListFilter',
  standalone: true,
})
export class CountryListFilterPipe implements PipeTransform {
  transform(items: Country[], filter: string | null) {
    console.log('filter', filter);
    if (filter === null) {
      return items;
    }
    return items.filter((item) => item.dialCodes.toLowerCase().includes(filter));
  }
}
