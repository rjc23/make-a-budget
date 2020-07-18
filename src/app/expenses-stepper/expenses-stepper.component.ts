import { Component, OnInit, Input } from '@angular/core';
import { BoundTextAst } from '@angular/compiler';

@Component({
  selector: 'app-expenses-stepper',
  templateUrl: './expenses-stepper.component.html',
  styleUrls: ['./expenses-stepper.component.scss']
})
export class ExpensesStepperComponent implements OnInit {

  @Input('boxes') boxes: any;
  @Input('type1') type1: any;
  @Input('type2') type2: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.type1);
    console.log(this.type2);
  }

}
