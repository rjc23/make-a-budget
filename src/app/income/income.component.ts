import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataGetterService } from './../services/data-getter.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  time: any;
  showNewElement: boolean;

  boxes: any = [
    {
      incomeName: 'Work',
      amount: 20000,
      per: 'week'
    },
    {
      incomeName: 'Side Hussle',
      amount: 500,
      per: 'fortnight'
    }
];

  constructor(private dataGetter: DataGetterService) { }

  ngOnInit(): void {
    this.showNewElement = true;
  }

  addNewElement() {
    this.showNewElement = true;
  }

  hideNewElement() {
    this.showNewElement = false;
  }

  submitIncome(value) {
    console.log(value);
  }

}
