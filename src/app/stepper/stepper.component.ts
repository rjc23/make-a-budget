import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input('type') type: any;
  @Input('boxes') boxes: any;
  @Input('specificBox') specificBox: any;
  // inputType: string;

  constructor() { }

  ngOnInit(): void {
  }
  

}
