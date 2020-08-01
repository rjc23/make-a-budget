import { FormDataService } from './../form-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  boxTypes: string[];
  boxes: any; 

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    // let local = localStorage.getItem('my-budget');
    // if(local !== null) {
    //   this.boxes = this.formDataService.setBoxes()
    // }
    // else {
      this.boxes = this.formDataService.prepopulatedIncomeData();
    // }
    
    this.boxTypes = this.formDataService.getBoxTypes();
    this.formDataService.calculateTotals();
  }

}
