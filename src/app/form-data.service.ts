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
    ],
    "expenses": [
    ],
    "varexpenses": [
    ],
    "incomeSummary": [
    ],
    "expensesSummary": [
    ],
    "varExpensesSummary": [
    ],
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
    "state": 'original'
  };
  
  boxes1: any = {
    "income": [    
      {
        incomeName: 'Work',
        amount: 40000,
        per: 'year'
      },
      {
        incomeName: 'Side Hustle',
        amount: 1000,
        per: 'month'
      },
      // {
      //   incomeName: 'Side Hustle2',
      //   amount: 500,
      //   per: 'two-weeks'
      // },
      // {
      //   incomeName: 'Side Hustle3',
      //   amount: 200,
      //   per: 'week'
      // }
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
    "varexpenses": [
      {
        incomeName: 'Electricity bill',
        amount: 80,
        per: 'month'
      },
      {
        incomeName: 'Car service',
        amount: 400,
        per: 'year'
      }
    ],
    "incomeSummary": [
      {
        incomeName: 'Work',
        amount: 40000,
        per: 'year'
      },
      {
        incomeName: 'Side Hustle',
        amount: 1000,
        per: 'month'
      },
      // {
      //   incomeName: 'Side Hustle2',
      //   amount: 500,
      //   per: 'two-weeks'
      // },
      // {
      //   incomeName: 'Side Hustle3',
      //   amount: 200,
      //   per: 'week'
      // }
    ],
    "expensesSummary": [
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
    "varExpensesSummary": [
      {
        incomeName: 'Electricity bill',
        amount: 80,
        per: 'month'
      },
      {
        incomeName: 'Car service',
        amount: 400,
        per: 'year'
      }
    ],
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
    "state": 'original'
  }


  constructor() { }

  public setLocalStorage() {
    localStorage.setItem('my-budget', JSON.stringify(this.boxes));
    return;
  }

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
        this.boxes['totalsYear'].income = total;
        break;
      }
      case 'expenses': {
        this.boxes['totalsWeek'].expenses = total/this.weekToYear;
        this.boxes['totalsTwoWeek'].expenses = total/(this.weekToYear/2);
        this.boxes['totalsMonth'].expenses = total/12;
        this.boxes['totalsYear'].expenses = total;
        break;
      }
      case 'varexpenses': {
        this.boxes['totalsWeek'].varexpenses = total/this.weekToYear;
        this.boxes['totalsTwoWeek'].varexpenses = total/(this.weekToYear/2);
        this.boxes['totalsMonth'].varexpenses = total/12;
        this.boxes['totalsYear'].varexpenses = total;
        break;
      }
    }
  }

  private calculateTotalExpenses() {
    this.boxes['totalsWeek'].totalExpenses = this.boxes['totalsWeek'].expenses + this.boxes['totalsWeek'].varexpenses;
    this.boxes['totalsTwoWeek'].totalExpenses = this.boxes['totalsTwoWeek'].expenses + this.boxes['totalsTwoWeek'].varexpenses;
    this.boxes['totalsMonth'].totalExpenses = this.boxes['totalsMonth'].expenses + this.boxes['totalsMonth'].varexpenses;
    this.boxes['totalsYear'].totalExpenses = this.boxes['totalsYear'].expenses + this.boxes['totalsYear'].varexpenses;

    this.boxes['totalsWeek'].incomeMinusExpenses = this.boxes['totalsWeek'].income - this.boxes['totalsWeek'].totalExpenses;
    this.boxes['totalsTwoWeek'].incomeMinusExpenses = this.boxes['totalsTwoWeek'].income - this.boxes['totalsTwoWeek'].totalExpenses;
    this.boxes['totalsMonth'].incomeMinusExpenses = this.boxes['totalsMonth'].income - this.boxes['totalsMonth'].totalExpenses;
    this.boxes['totalsYear'].incomeMinusExpenses = this.boxes['totalsYear'].income - this.boxes['totalsYear'].totalExpenses;
  }

  public recalculateBoxes(type: string) {
    let total = 0;
    if(type === 'income') {
      total = this.calculateIndividualTotal('income');
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
  }

  public revertToOriginal() {
    if(this.boxes.state === 'original') {
      return;
    }
    this.boxes.show = 'year';
    this.boxes.state = 'original';
    for(let i = 0; i < this.boxes.incomeSummary.length; i++) {
      this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount;
      this.boxes.incomeSummary[i].per = this.boxes.income[i].per;
    }
    for(let i = 0; i < this.boxes.expensesSummary.length; i++) {
      this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount;
      this.boxes.expensesSummary[i].per = this.boxes.expenses[i].per;
    }
    for(let i = 0; i < this.boxes.varExpensesSummary.length; i++) {
      this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount;
      this.boxes.varExpensesSummary[i].per = this.boxes.varexpenses[i].per;
    }
  }

  public showWeekOnSummary() {
    this.boxes.show = 'week';
    this.boxes.state = 'week';

    for(let i = 0; i < this.boxes.incomeSummary.length; i++) {
      if(this.boxes.income[i].per === 'year') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount/this.weekToYear;
        this.boxes.incomeSummary[i].per = 'week';
        console.log('here');
      }
      else if(this.boxes.income[i].per === 'month') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount/this.weekToMonth;
        this.boxes.incomeSummary[i].per = 'week';
      }
      else if(this.boxes.income[i].per === 'two-weeks') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount/2;
        this.boxes.incomeSummary[i].per = 'week';
      }
      else if(this.boxes.income[i].per === 'week') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount;
        this.boxes.incomeSummary[i].per = 'week';
      }
    }

    for(let i = 0; i < this.boxes.expensesSummary.length; i++) {
      if(this.boxes.expenses[i].per === 'year') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount/this.weekToYear;
        this.boxes.expensesSummary[i].per = 'week';
      }
      else if(this.boxes.expenses[i].per === 'month') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount/this.weekToMonth;
        this.boxes.expensesSummary[i].per = 'week';
      }
      else if(this.boxes.expenses[i].per === 'two-weeks') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount/2;
        this.boxes.expensesSummary[i].per = 'week';
      }
      else if(this.boxes.expenses[i].per === 'week') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount;
        this.boxes.expensesSummary[i].per = 'week';
      }
    }

    for(let i = 0; i < this.boxes.varExpensesSummary.length; i++) {
      if(this.boxes.varexpenses[i].per === 'year') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount/this.weekToYear;
        this.boxes.varExpensesSummary[i].per = 'week';
      }
      else if(this.boxes.varexpenses[i].per === 'month') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount/this.weekToMonth;
        this.boxes.varExpensesSummary[i].per = 'week';
      }
      else if(this.boxes.varexpenses[i].per === 'two-weeks') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount/2;
        this.boxes.varExpensesSummary[i].per = 'week';
      }
      else if(this.boxes.varexpenses[i].per === 'week') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount;
        this.boxes.varExpensesSummary[i].per = 'week';
      }
    }
  }

  public showMonthOnSummary() {
    this.boxes.show = 'month';
    this.boxes.state = 'month';

    for(let i = 0; i < this.boxes.incomeSummary.length; i++) {
      if(this.boxes.income[i].per === 'year') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount/12;
        this.boxes.incomeSummary[i].per = 'month';
      }
      else if(this.boxes.income[i].per === 'two-weeks') {
        this.boxes.incomeSummary[i].amount = (this.boxes.income[i].amount/2)*this.weekToMonth;
        this.boxes.incomeSummary[i].per = 'month';
      }
      else if(this.boxes.income[i].per === 'month') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount;
        this.boxes.incomeSummary[i].per = 'month';
      }
      else if(this.boxes.income[i].per === 'week') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount*this.weekToMonth;
        this.boxes.incomeSummary[i].per = 'month';
      }
    }

    for(let i = 0; i < this.boxes.expensesSummary.length; i++) {
      if(this.boxes.expenses[i].per === 'year') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount/12
        this.boxes.expensesSummary[i].per = 'month';
      }
      else if(this.boxes.expenses[i].per === 'two-weeks') {
        this.boxes.expensesSummary[i].amount = (this.boxes.expenses[i].amount/2)*this.weekToMonth;
        this.boxes.expensesSummary[i].per = 'month';
      }
      else if(this.boxes.expenses[i].per === 'month') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount;
        this.boxes.expensesSummary[i].per = 'month';
      }
      else if(this.boxes.expenses[i].per === 'week') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount*this.weekToMonth;
        this.boxes.expensesSummary[i].per = 'month';
      }
    }

    for(let i = 0; i < this.boxes.varExpensesSummary.length; i++) {
      if(this.boxes.varexpenses[i].per === 'year') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount/12;
        this.boxes.varExpensesSummary[i].per = 'month';
      }
      else if(this.boxes.varexpenses[i].per === 'two-weeks') {
        this.boxes.varExpensesSummary[i].amount = (this.boxes.varexpenses[i].amount/2)*this.weekToMonth;
        this.boxes.varExpensesSummary[i].per = 'month';
      }
      else if(this.boxes.varexpenses[i].per === 'month') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount;
        this.boxes.varExpensesSummary[i].per = 'month';
      }
      else if(this.boxes.varexpenses[i].per === 'week') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount*this.weekToMonth;
        this.boxes.varExpensesSummary[i].per = 'month';
      }
    }
  }

  public showYearOnSummary() {
    this.boxes.show = 'year';
    this.boxes.state = 'year';

    for(let i = 0; i < this.boxes.incomeSummary.length; i++) {
      if(this.boxes.income[i].per === 'year') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount;
        this.boxes.incomeSummary[i].per = 'year';
      }
      else if(this.boxes.income[i].per === 'month') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount*12;
        this.boxes.incomeSummary[i].per = 'year';
      }
      else if(this.boxes.income[i].per === 'two-weeks') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount*26;
        this.boxes.incomeSummary[i].per = 'year';
      }
      else if(this.boxes.income[i].per === 'week') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount*52;
        this.boxes.incomeSummary[i].per = 'year';
      }
    }

    for(let i = 0; i < this.boxes.expensesSummary.length; i++) {
      if(this.boxes.expenses[i].per === 'year') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount;
        this.boxes.expensesSummary[i].per = 'year';
      }
      else if(this.boxes.expenses[i].per === 'month') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount*12;
        this.boxes.expensesSummary[i].per = 'year';
      }
      else if(this.boxes.expenses[i].per === 'two-weeks') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount*26;
        this.boxes.expensesSummary[i].per = 'year';
      }
      else if(this.boxes.expenses[i].per === 'week') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount*52;
        this.boxes.expensesSummary[i].per = 'year';
      }
    }

    for(let i = 0; i < this.boxes.varExpensesSummary.length; i++) {
      if(this.boxes.varexpenses[i].per === 'year') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount;
        this.boxes.varExpensesSummary[i].per = 'year';
      }
      else if(this.boxes.varexpenses[i].per === 'month') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount*12;
        this.boxes.varExpensesSummary[i].per = 'year';
      }
      else if(this.boxes.varexpenses[i].per === 'two-weeks') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount*26;
        this.boxes.varExpensesSummary[i].per = 'year';
      }
      else if(this.boxes.varexpenses[i].per === 'week') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount*52;
        this.boxes.varExpensesSummary[i].per = 'year';
      }
    }
  }

  public showTwoWeekOnSummary() {
    this.boxes.show = 'two-weeks';
    this.boxes.state = 'two-weeks';

    for(let i = 0; i < this.boxes.incomeSummary.length; i++) {
      if(this.boxes.income[i].per === 'year') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount/26;
        this.boxes.incomeSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.income[i].per === 'month') {
        this.boxes.incomeSummary[i].amount = (this.boxes.income[i].amount/this.weekToMonth)*2;
        this.boxes.incomeSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.income[i].per === 'two-weeks') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount;
        this.boxes.incomeSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.income[i].per === 'week') {
        this.boxes.incomeSummary[i].amount = this.boxes.income[i].amount*2;
        this.boxes.incomeSummary[i].per = 'two-weeks';
      }
    }

    for(let i = 0; i < this.boxes.expensesSummary.length; i++) {
      if(this.boxes.expenses[i].per === 'year') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount/26;
        this.boxes.expensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.expenses[i].per === 'month') {
        this.boxes.expensesSummary[i].amount = (this.boxes.expenses[i].amount/this.weekToMonth)*2;
        this.boxes.expensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.expenses[i].per === 'two-weeks') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount;
        this.boxes.expensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.expenses[i].per === 'week') {
        this.boxes.expensesSummary[i].amount = this.boxes.expenses[i].amount*2;
        this.boxes.expensesSummary[i].per = 'two-weeks';
      }
    }

    for(let i = 0; i < this.boxes.varExpensesSummary.length; i++) {
      if(this.boxes.varexpenses[i].per === 'year') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount/26;
        this.boxes.varExpensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.varexpenses[i].per === 'month') {
        this.boxes.varExpensesSummary[i].amount = (this.boxes.varexpenses[i].amount/this.weekToMonth)*2;
        this.boxes.varExpensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.varexpenses[i].per === 'two-weeks') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount;
        this.boxes.varExpensesSummary[i].per = 'two-weeks';
      }
      else if(this.boxes.varexpenses[i].per === 'week') {
        this.boxes.varExpensesSummary[i].amount = this.boxes.varexpenses[i].amount*2;
        this.boxes.varExpensesSummary[i].per = 'two-weeks';
      }
    }
  }
}
