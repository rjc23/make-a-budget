import { FormDataService } from './../form-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input('boxes') boxes: any;
  @Input('type') type: any;

  constructor(private dataservice: FormDataService) { }

  ngOnInit(): void {
    console.log(this.boxes);
  }

  public convertTo(input: any) {
    if(input === 'week') {
      this.dataservice.showWeekOnSummary();
    }
    else if(input === 'two-weeks') {
      this.dataservice.showTwoWeekOnSummary();
    }
    else if(input === 'month') {
      this.dataservice.showMonthOnSummary();
    }
    else if(input === 'year') {
      this.dataservice.showYearOnSummary();
    }
    else if(input === 'original') {
      this.dataservice.revertToOriginal();
    }
  }
}
