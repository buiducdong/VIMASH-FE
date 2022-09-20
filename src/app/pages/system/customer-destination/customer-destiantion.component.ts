import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ISearchRequest } from 'src/app/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-customer-destiantion',
  templateUrl: './customer-destiantion.component.html',
  styleUrls: ['./customer-destiantion.component.scss'],
})
export class CustomerDestiantionComponent implements OnInit{
  @Input() dataCustomer : String ="a";
  http: any;
  constructor(private httpService: HttpService) {
  }

  listdata = [];
  ngOnInit(): void {
    console.log("customer render")
    
  }

  dataRow($event: any) :void{
    console.log($event)
  }
  
}
