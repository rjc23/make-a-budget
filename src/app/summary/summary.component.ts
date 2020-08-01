
import { FormDataService } from './../form-data.service';
import { Component, OnInit, Input } from '@angular/core';
import * as JSPdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 

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

  async createPDF () {
    // let doc = new jsPDF('p', 'pt', 'a4')
    // let canvas = await html2canvas(document.getElementById('content-to-export'))
    // let imgData = canvas.toDataURL('image/png') // optional
    // doc.addImage(imgData, 'PNG') // imgData or canvas
    // document.body.appendChild(canvas) // It's for see the canvas
    // doc.save('test.pdf')
  }
}
