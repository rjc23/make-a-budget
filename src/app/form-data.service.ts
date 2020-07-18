import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  weekToMonth = 4.34;
  weekToYear = 52;
  boxtypes: string[] = ["income", "fixed expenses", "variable expenses"];
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
    "varexpenses": [],
    "totalsWeek":
    {
      income: 0,
      expenses: 0,
      varexpenses: 0,
      totalExpenses: 0
    },
    "totalsTwoWeek":
    {
      income: 0,
      expenses: 0,
      varexpenses: 0,
      totalExpenses: 0
    },
    "totalsMonth":
    {
      income: 0,
      expenses: 0,
      varexpenses: 0,
      totalExpenses: 0
    },
    "totalsYear":
    {
      income: 0,
      expenses: 0,
      varexpenses: 0,
      totalExpenses: 0
    },
    "show": 'year',
  }


  constructor() { }

  public prepopulatedIncomeData() {
    return this.boxes;
  }

  public getBoxTypes() {
    return this.boxtypes;
  }

  public calculateTotals() {
    let totalIncome = this.calculateIndividualTotal('income');
    let totalExpenses = this.calculateIndividualTotal('expenses');
    let totalVarExpenses = this.calculateIndividualTotal('varexpenses');
    this.populateTotals('income', totalIncome);
    this.populateTotals('expenses', totalExpenses);
    this.populateTotals('varexpenses', totalVarExpenses);
    this.calculateTotalExpenses();
    
  }
  
  private calculateIndividualTotal(name: string): number {
    let counter = 0;
    for(let i = 0; i < this.boxes[name].length; i++) {
      switch(this.boxes[name][i].per) {
        case 'week': {
          counter += (this.boxes[name][i].amount * this.weekToYear);
          break;
        }
        case 'two-weeks': {
          counter += (this.boxes[name][i].amount * (this.weekToYear/2));
          break;
        }
        case 'month': {
          counter += (this.boxes[name][i].amount * 12);
          break;
        }
        case 'year': {
          counter += this.boxes[name][i].amount;
          break;
        }
      }
    }
    return counter;
  }

  private populateTotals(name: string, total: number): void {
    switch(name) {
      case 'income': {
        this.boxes['totalsWeek'].income = total/this.weekToYear;
        this.boxes['totalsTwoWeek'].income = total/(this.weekToYear/2);
        this.boxes['totalsMonth'].income = total/12;
        this.boxes['totalsYear'].income = total
        break;
      }
      case 'expenses': {
        this.boxes['totalsWeek'].expenses = total/this.weekToYear;
        this.boxes['totalsTwoWeek'].expenses = total/(this.weekToYear/2);
        this.boxes['totalsMonth'].expenses = total/12;
        this.boxes['totalsYear'].expenses = total
        break;
      }
      case 'varexpenses': {
        this.boxes['totalsWeek'].varexpenses = total/this.weekToYear;
        this.boxes['totalsTwoWeek'].varexpenses = total/(this.weekToYear/2);
        this.boxes['totalsMonth'].varexpenses = total/12;
        this.boxes['totalsYear'].varexpenses = total
        break;
      }
    }
  }

  private calculateTotalExpenses() {
    this.boxes['totalsWeek'].totalExpenses = this.boxes['totalsWeek'].expenses + this.boxes['totalsWeek'].varexpenses;
    this.boxes['totalsTwoWeek'].totalExpenses = this.boxes['totalsTwoWeek'].expenses + this.boxes['totalsTwoWeek'].varexpenses;
    this.boxes['totalsMonth'].totalExpenses = this.boxes['totalsMonth'].expenses + this.boxes['totalsMonth'].varexpenses;
    this.boxes['totalsYear'].totalExpenses = this.boxes['totalsYear'].expenses + this.boxes['totalsYear'].varexpenses;
  }

  public recalculateBoxes(type: string) {
    let total = 0;
    if(type === 'income') {
      total = this.calculateIndividualTotal('income');
      console.log(total);
      this.populateTotals('income', total);
    }
    else if (type === 'fixed expenses') {
      total = this.calculateIndividualTotal('expenses');
      this.populateTotals('expenses', total);
      this.calculateTotalExpenses();
    }
    else if (type === 'variable expenses') {
      total = this.calculateIndividualTotal('varexpenses');
      this.populateTotals('varexpenses', total);
      this.calculateTotalExpenses();
    }
    console.log(this.boxes);
  }
}
