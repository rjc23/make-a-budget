import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  boxTypes: string[];
  boxes: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.boxes = this.formDataService.prepopulatedIncomeData();
    this.boxTypes = this.formDataService.getBoxTypes();
  }
}
