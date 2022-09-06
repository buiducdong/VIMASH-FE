import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [CustomerDestiantionComponent, CustomerDestinationDetailComponent, SystemComponent],
  imports: [
    SystemRoutingModule,
    LayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
//    MatFormFieldModule,
//    MatInputModule
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
