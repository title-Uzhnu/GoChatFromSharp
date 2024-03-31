import { Pipe, PipeTransform } from '@angular/core';
import { IChatMessage } from '../models/IChatMessage';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IChatMessage[], searchValue: string): IChatMessage[] {
    if (!searchValue) return value;

    return value.filter((v: IChatMessage) =>
      v.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }

}
