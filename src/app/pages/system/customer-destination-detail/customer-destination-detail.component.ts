import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-destination-detail',
  templateUrl: './customer-destination-detail.component.html',
  styleUrls: ['./customer-destination-detail.component.scss']
})
export class CustomerDestinationDetailComponent implements OnInit {

  public isDisabled = true;
  form: any;
  formCustomer!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.formCustomer = new FormGroup({
      customerCode : new FormControl('',[Validators.required]),
      customerName : new FormControl('',[Validators.required]),
      createBy : new FormControl('',[Validators.required]),
      phoneNumber : new FormControl('',[Validators.required]),
      faxNumber : new FormControl('',[Validators.required]),
      leadTime : new FormControl('',[Validators.required]),
      routeCode : new FormControl('',[Validators.required]),
      courseCode : new FormControl('',[Validators.required]),
      postCode : new FormControl('',[Validators.required]),
      address1 : new FormControl({value: '',disabled:true}),
      address2 : new FormControl({value: '',disabled:true}),
      address3 : new FormControl({value: '',disabled:true}),
      address4 : new FormControl('',[Validators.required]),
      notes : new FormControl('',[Validators.required])
    });
    
  }
  save(){
    console.log(this.formCustomer.value)
  }
}
