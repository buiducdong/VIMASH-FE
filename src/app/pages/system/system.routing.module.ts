import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  {
    path: '', component: SystemComponent, children: [
      { path: 'customer', component: CustomerDestiantionComponent },
      { path: 'customer-detail', component: CustomerDestinationDetailComponent }
      ,
      { path: 'customer-detail/:id', component: CustomerDestinationDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
