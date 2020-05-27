import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notSet'
})
export class NotSetPipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      return value;
    } else {
      return 'Not Set';
    }
  }

}
