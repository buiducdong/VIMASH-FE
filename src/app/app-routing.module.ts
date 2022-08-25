import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDestiantionComponent } from './pages/customer-destination/customer-destiantion.component';
import { CustomerDestinationDetailComponent } from './pages/customer-destination-detail/customer-destination-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'master/customer-destination',
    pathMatch: 'full',
  },
  {
    path: 'master/customer-destination',
    component: CustomerDestiantionComponent,
  },
  {
    path: 'master/customer-destination-detail',
    component: CustomerDestinationDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
