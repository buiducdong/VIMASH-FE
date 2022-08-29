import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';

@NgModule({
  declarations: [CustomerDestiantionComponent, CustomerDestinationDetailComponent, SystemComponent],
  imports: [
    SystemRoutingModule,
    LayoutModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
