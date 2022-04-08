import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, shouldAddDDD: boolean): string {
    let result = value.substring(0, 5) + "-"
              + value.substring(5);
    
    if (shouldAddDDD) {
      result = '(35) ' + result;
    }
    return result;
  }

}
