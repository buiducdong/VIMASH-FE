import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISearchRequest } from 'src/app/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-customer-destiantion',
  templateUrl: './customer-destiantion.component.html',
  styleUrls: ['./customer-destiantion.component.scss'],
})
export class CustomerDestiantionComponent implements OnInit {
  public constructor(private httpService: HttpService, private router: Router, private toast: ToastrService) {
    this.getCustomerTable()
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        let route: any = event.urlAfterRedirects
        if (route.includes("delivery"))  {
          this.isDelivery = true
        } else {
          this.isDelivery = false
        }
      }
    })
  }
  isDelivery = false
  showDialog = false
  idDelete?: number
  page = 1
  serchRequest: ISearchRequest = {
    page: 1,
    size: 10,
    name: "",
    code1: "",
    code2: ""
  };

  listdata = [];
  totalRecord?: number;
  currentPage?: number;
  public ngOnInit() {
    this.getCustomerTable()
  }

  onShowDialog(data: any): void {
    this.showDialog = !this.showDialog
    this.idDelete = data
  }

  disableSearch = false
  getCustomerTable() {
    this.httpService.get(this.serchRequest).subscribe(result => {
      console.log(result)
      this.listdata = result.ResultBean.data.results
      this.totalRecord = result.ResultBean.data.totalRecords
      this.currentPage = result.ResultBean.data.currentPage
    }
      )
  }

  
  showMore() {
    this.serchRequest.page = this.page +=1;
    this.httpService.get(this.serchRequest).subscribe(result => {
      const data:[] = result.ResultBean.data.results;
      this.listdata.push(...data)
    })
  }


  deleteCustomer(id: number) {
    this.httpService.deleteSignleCustomer(id).subscribe(result => {
      this.getCustomerTable()
    })
  }

  searchCustomerTable() {
    if (this.serchRequest.name != null && this.serchRequest.name.length > 0 || (this.serchRequest.code1 != null && this.serchRequest.code2 != null)) {

      this.httpService.get(this.serchRequest).subscribe(result => {
        this.listdata = result.ResultBean.data.results
      })
      this.clearInput()
    }
  }

  clearInput() {
    this.serchRequest.name = '';
    this.serchRequest.code1 = '';
    this.serchRequest.code2 = '';
  }


}
