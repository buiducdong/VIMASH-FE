import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../core/services/http/http.service';
import { Utils } from '../../../common/util/utils';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDestiantionComponent } from '../customer-destination/customer-destiantion.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfirmComponent } from 'src/app/layout/component/mat-dialog-confirm/mat-dialog-confirm.component';
import { customer } from '../../../layout/models/customer.model';

interface Customer{
  customerId : any;
  customerCode: any;
  customerName: any;
  updateBy: any;
  updateDate: any;
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
export class CustomerDestinationDetailComponent implements OnInit, OnChanges {

  @ViewChild(CustomerDestiantionComponent) child: any;
  message:any;
  formCustomer!: FormGroup;
  public isDisabled = true;
  selectedRouteValue !: string;
  selectedValue !: string;
  dataRoute: any;
  dataCourse: any;
  dataAddress: any;
  id:any=0;
  public utils = Utils;
  public dataCustomer !: Customer;

  data: any;
  
  isSave = false;


  constructor(private formBuilder : FormBuilder,private api: HttpService,private toastr: ToastrService
    ,private _route:ActivatedRoute,private _router: Router,private dialog: MatDialog) { }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
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
      address1 : new FormControl(),
      address2 : new FormControl(),
      address3 : new FormControl(),
      address4 : new FormControl('',[Validators.required,Validators.maxLength(50)]),
      notes : new FormControl('',[Validators.required,Validators.maxLength(500)])
    });
    this.getAllRoute()
    console.log(this.child)
    this._route.paramMap.subscribe(parameterMap=>{
      this.id = parameterMap.get('id');
      console.log(this.id)
      if(this.id != null){
        this.api.getCustomerId(this.id).subscribe({
          next:(res) =>{
            this.formCustomer.controls['customerCode'].setValue(res.ResultBean.data.customerCode)
            this.formCustomer.controls['customerName'].setValue(res.ResultBean.data.customerName)
            this.formCustomer.controls['createBy'].setValue(res.ResultBean.data.createBy)
            this.formCustomer.controls['phoneNumber'].setValue(res.ResultBean.data.phoneNumber)
            this.formCustomer.controls['faxNumber'].setValue(res.ResultBean.data.faxNumber)
            this.formCustomer.controls['leadTime'].setValue(res.ResultBean.data.leadTime)
            this.formCustomer.controls['routeCode'].setValue(res.ResultBean.data.routeCode)
            this.formCustomer.controls['courseCode'].setValue(res.ResultBean.data.courseCode)
            this.formCustomer.controls['postCode'].setValue(res.ResultBean.data.postCode)
            this.formCustomer.controls['address1'].setValue(res.ResultBean.data.address1)
            this.formCustomer.controls['address2'].setValue(res.ResultBean.data.address2)
            this.formCustomer.controls['address3'].setValue(res.ResultBean.data.address3)
            this.formCustomer.controls['address4'].setValue(res.ResultBean.data.address4)
            this.formCustomer.controls['notes'].setValue(res.ResultBean.data.notes)
          },
          error:(_err)=>{
            this.toastr.error('保存できません。');
          }
        })
      }else{
        this.isSave = true;
      }
      
    })

    this.api.currentMessage.subscribe(message => this.message = message);
    console.log(this.message.customerId)
  }
  save(){
    this.data = this.formCustomer.value;

    this.api.postCustomer(this.data).subscribe({
      next:(_res) =>{
        this.toastr.success('保存しました。');
      },
      error:(_err)=>{
        this.toastr.error('保存できません。');
      }
    })
    this.reset();
    this._router.navigate(['/customer'])
  }
  reset(){
    this.formCustomer.reset();
  }
  checkCustomerCode(customerCode: any){
    console.log(customerCode.target.value)
    this.api.getCustomerCode(customerCode.target.value).subscribe({
      next:(_res) =>{
        
      },
      error:(_err)=>{
        alert("error")
        this.formCustomer.controls['customerCode'].setValue('')
      }
    })
  }
  getAllRoute(){
    this.api.getRoute().subscribe((res) =>{
      this.dataRoute = res.ResultBean.data;
    })
  }
  getCourse(val:any){
    this.api.getCourse(val).subscribe((res) =>{
      this.dataCourse = res.ResultBean.data;
    })
  }
  getAddress(val:any){
    console.log(val)
    this.api.getAddress(val).subscribe({
      next:(res) =>{
        this.formCustomer.controls['address1'].setValue(res.results[0].address1)
        this.formCustomer.controls['address2'].setValue(res.results[0].address2)
        this.formCustomer.controls['address3'].setValue(res.results[0].address3)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  update(){
    this.dataCustomer = this.formCustomer.value;
    this.dataCustomer.customerId = this.id;
    this.dataCustomer.updateBy = this.formCustomer.controls['createBy'].value
    this.dataCustomer.updateDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.api.updateCustomer(this.dataCustomer).subscribe({
      next:(res) =>{
        this.toastr.success('保存しました。');
      },
      error:(err)=>{
        this.toastr.error('保存できません。');
      }
    })
    this.formCustomer.reset()
    this._router.navigate(['/customer'])
  }

  delete(){
    this.dialog.open(MatDialogConfirmComponent,{
      width: '480px',
      height: '200px',
      
      data: this.id
    })
  }
}
