import { Component, OnInit, Input } from '@angular/core';
import { DataGetterService } from './../services/data-getter.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  @Input('boxes') boxes: any;
  time: any;
  showNewElement: boolean;
  myForm: FormGroup;

  constructor(private dataGetter: DataGetterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //Initalise form
    this.showNewElement = false;
    this.myForm = this.fb.group({
      incomeName: '',
      amount: '',
      per: ''
    })

    //this.myForm.valueChanges.subscribe(console.log);
  }

  addNewElement() {
    this.showNewElement = true;
  }

  hideNewElement() {
    this.myForm.reset();
    this.showNewElement = false;
  }

  submitIncome() {
    if(this.myForm.valid) {
      this.boxes.push(this.myForm.value);
      this.myForm.reset();
      this.showNewElement = false;
    }
  }

  removeIncome(input:any) {
    this.boxes.splice(input,1);
  //   for(let i = 0; i < this.boxes.length; i++) {
  //     if(i === input) {
  //       console.log('yes');
  //     }
  //   }
   }

}
