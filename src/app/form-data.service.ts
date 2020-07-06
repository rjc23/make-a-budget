import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  boxtypes: string[] = ["income", "expenses", "other-expenses"];
  boxes: any = {
    "income": [    
      {
        incomeName: 'Work',
        amount: 40000,
        per: 'year'
      },
      {
        incomeName: 'Side Hussle',
        amount: 500,
        per: 'two-weeks'
      }
    ],
    "expenses": [
      {
        incomeName: 'Rent',
        amount: 400,
        per: 'two-weeks'
      },
      {
        incomeName: 'Food shopping',
        amount: 80,
        per: 'week'
      },
      {
        incomeName: 'Gym membership',
        amount: 14.95,
        per: 'week'
      },
      {
        incomeName: 'Netflix',
        amount: 9.99,
        per: 'week'
      },
      {
        incomeName: 'Petrol',
        amount: 60,
        per: 'two-weeks'
      }
    ],
    "other-expenses": []
  }


  constructor() { }

  prepopulatedIncomeData() {
    return this.boxes;
  }

  getBoxTypes() {
    return this.boxtypes;
  }
}
