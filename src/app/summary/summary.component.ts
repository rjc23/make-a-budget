import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input('boxes') boxes: any;
  @Input('type') type: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.type)
  }

}
