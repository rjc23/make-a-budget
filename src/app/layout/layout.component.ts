import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // boxTypes: string[];
  // boxes: any; 

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    // let local = localStorage.getItem('my-budget');
    // // if(local !== null) {
    //   this.boxes = JSON.parse(local);
    // // } else {
    //   this.boxes = this.formDataService.prepopulatedIncomeData();
    // // }
    // this.boxTypes = this.formDataService.getBoxTypes();
    // this.formDataService.calculateTotals();
  }
}
