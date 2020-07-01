import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
