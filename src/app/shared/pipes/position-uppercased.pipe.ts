import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionUppercased'
})
export class PositionUppercasedPipe implements PipeTransform {

 transform(value: string) {
   if(value.toLocaleLowerCase() === 'project manager') {
     return value.toLocaleUpperCase()
   }
   return value;
 }

}
