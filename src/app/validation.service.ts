import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  amountValidator(control) {
    if(!isNaN(control.value)) {
      return null;
    }
    return { invalidAmount: true };
  }
}
