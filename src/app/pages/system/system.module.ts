import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';
import { DatatableCustomer } from './customer-destination/datatable-customer/datatable-customer.component'
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomerDestiantionComponent,
    CustomerDestinationDetailComponent,
    SystemComponent,
    DatatableCustomer
  ],
  imports: [
    SystemRoutingModule,
    LayoutModule,
    TranslateModule,
    MatTableModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    //    MatFormFieldModule,
    //    MatInputModule
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
