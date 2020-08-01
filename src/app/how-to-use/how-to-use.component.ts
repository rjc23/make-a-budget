import { ValidationService } from './../validation.service';
import { FormDataService } from './../form-data.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent implements OnInit {

  myForm: FormGroup;
  showNewElement: boolean = true;
  type = 'income';
  amount = 40000;

  constructor(private fb: FormBuilder, 
    private dataservice: FormDataService, 
    private validationService: ValidationService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      incomeName: ['', Validators.required],
      amount: ['', [Validators.required, this.validationService.amountValidator]],
      per: ['', Validators.required]
    })
  }

}
