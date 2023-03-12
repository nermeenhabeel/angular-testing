import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squre'
})
export class SqurePipe implements PipeTransform {

  transform(value:number): number {
    return value*value;
  }

}
