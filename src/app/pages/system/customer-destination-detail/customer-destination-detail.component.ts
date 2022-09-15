import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../core/services/http/http.service';
import { customer } from '../../../layout/models/customer.model';
import { Utils } from '../../../common/util/utils';
import { ToastrService } from 'ngx-toastr';
interface Food {
  value: string;
  viewValue: string;
}

interface Customer{
  customerCode: any;
  customerName: any;
  createBy: any;
  phoneNumber: any;
  faxNumber: any;
  leadTime: any;
  routeCode: any;
  courseCode: any;
  postCode: any;
  address1: any;
  address2: any;
  address3: any;
  address4: any;
  notes: any;

}

@Component({
  selector: 'app-customer-destination-detail',
  templateUrl: './customer-destination-detail.component.html',
  styleUrls: ['./customer-destination-detail.component.scss']
})
export class CustomerDestinationDetailComponent implements OnInit {
  formCustomer!: FormGroup;
  public isDisabled = true;
  selectedRouteValue !: string;
  selectedValue !: string;
  dataRoute: any;
  dataCourse: any;
  dataAddress: any;
  public utils = Utils;
  public dataCustomer !: Customer;
  constructor(private formBuilder : FormBuilder,private api: HttpService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.formCustomer = this.formBuilder.group({
      customerCode : new FormControl('',[Validators.required,Validators.maxLength(40)]),
      customerName : new FormControl('',[Validators.required,Validators.maxLength(100)]),
      createBy : new FormControl('',[Validators.required,Validators.maxLength(6),this.utils.checkNumberic]),
      phoneNumber : new FormControl('',[Validators.required,Validators.maxLength(15), this.utils.validateFaxPhonePostCode]),
      faxNumber : new FormControl('',[Validators.required,Validators.maxLength(15), this.utils.validateFaxPhonePostCode]),
      leadTime : new FormControl('',[Validators.required,this.utils.checkNumberic]),
      routeCode : new FormControl('',[Validators.required]),
      courseCode : new FormControl('',[Validators.required]),
      postCode : new FormControl('',[Validators.required,Validators.maxLength(8),this.utils.validateFaxPhonePostCode]),
      address1 : new FormControl({value : '',disabled:true}),
      address2 : new FormControl({value : '',disabled:true}),
      address3 : new FormControl({value : '',disabled:true}),
      address4 : new FormControl('',[Validators.required,Validators.maxLength(50)]),
      notes : new FormControl('',[Validators.required,Validators.maxLength(500)])
    });
    this.getA()
    this.getAllRoute()
    this.formCustomer.controls['address1'].setValue('')
    this.formCustomer.controls['address1']?.disable();
        this.formCustomer.controls['address2'].setValue('')
        this.formCustomer.controls['address2']?.disable();
        this.formCustomer.controls['address3'].setValue('')
        this.formCustomer.controls['address3']?.disable();

        
  }
  save(){
    this.dataCustomer = this.formCustomer.value;
    this.dataCustomer.address1 = this.formCustomer.controls['address1'].value
    this.dataCustomer.address2 = this.formCustomer.controls['address2'].value
    this.dataCustomer.address3 = this.formCustomer.controls['address3'].value
    console.log(this.dataCustomer)
    this.api.postCustomer(this.dataCustomer).subscribe({
      next:(res) =>{
        console.log(res)
        this.toastr.success('保存しました。');
      },
      error:(err)=>{
        this.toastr.error('保存できません。');
      }
    })
    this.formCustomer.reset();
  }
  reset(){
    this.formCustomer.reset();
  }
  checkCustomerCode(customerCode: any){
    console.log(customerCode.target.value)
    this.api.getCustomerCode(customerCode.target.value).subscribe({
      next:(res) =>{
        
      },
      error:(err)=>{
        alert("error")
        this.formCustomer.controls['customerCode'].setValue('')
      }
    })
  }
  getAllRoute(){
    this.api.getRoute().subscribe({
      next:(res) =>{
        
        this.dataRoute = res.ResultBean.data;
        console.log(this.dataRoute)
      },
      error:(err)=>{
        alert("error")
      }
    })
  }
  getCourse(val:any){
    this.api.getCourse(val).subscribe({
      next:(res) =>{
        
        this.dataCourse = res.ResultBean.data;
        console.log(this.dataCourse)
      },
      error:(err)=>{
        alert("error")
      }
    })
  }
  getAddress(val:any){
    this.api.getAddress(val).subscribe({
      next:(res) =>{
        this.toastr.success('保存しました','dsadas');
        this.dataAddress = res;
        console.log(this.dataAddress.results[0])
        this.formCustomer.controls['address1'].setValue(this.dataAddress.results[0].address1)
        this.formCustomer.controls['address2'].setValue(this.dataAddress.results[0].address2)
        this.formCustomer.controls['address3'].setValue(this.dataAddress.results[0].address3)
      },
      error:(err)=>{
        alert("error")
      }
    })
  }
  getA(){
    this.api.getA().subscribe({
      next:(res) =>{
        
        console.log(this.dataAddress.results[0])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
