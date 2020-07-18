import { FormDataService } from './../form-data.service';
import { Component, OnInit, Input, DoCheck} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit, DoCheck {

  @Input('boxes') boxes: any;
  @Input('type') type: any;

  showNewElement: boolean;
  myForm: FormGroup;
  savedBoxes: any;
  isSaved: boolean;
  isLoading: boolean = true;

  constructor(private fb: FormBuilder, private dataservice: FormDataService) { }

  ngOnInit(): void {
    //Initalise form
    this.showNewElement = false;
    this.myForm = this.fb.group({
      incomeName: '',
      amount: '',
      per: ''
    })
    // this.myForm.valueChanges.subscribe(console.log);
  }

  ngDoCheck() {
    if(this.isSaved && this.isLoading == false) {
      this.isSaved = false;
    }
    this.isLoading = false;
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
      this.dataservice.recalculateBoxes(this.type);
      this.myForm.reset();
      this.showNewElement = false;
    }
  }

  removeIncome(input:any) {
    this.boxes.splice(input,1);
    this.dataservice.recalculateBoxes(this.type);
   }

   clearBoxes() {
     this.savedBoxes = this.boxes;
     this.isSaved = true;
     this.boxes = [];
   }

   undoClear() {
     this.boxes = this.savedBoxes;
     this.isSaved = false;
   }
}
