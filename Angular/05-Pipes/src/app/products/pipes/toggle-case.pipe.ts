import { Pipe, PipeTransform } from '@angular/core';

// emmanuel | toggleCase = 'EMMANUEL'
// EMMANUEL | toggleCase = 'emmanuel'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    // console.log({ value });
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
