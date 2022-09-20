import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AbouttComponent } from '../about/child2.component';
import { IssueComponent } from '../issue/issue.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SystemComponent } from './system.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  {
    path: '', component: SystemComponent, children: [
      {
        path: 'customer', component: CustomerDestiantionComponent, children: [
          { path: 'delivery', component: DeliveryComponent },
          { path: 'delivery/:id', component: DeliveryComponent },
        ]
      },
      { path: 'detail', component: CustomerDestinationDetailComponent },
      {
        path: 'warehouse',
        children: [
          {
            path: 'child1',
            component: AboutComponent
          },
          {
            path: 'child2',
            component: AbouttComponent
          },
        ]
      },
      {
        path: 'issue',
        component: IssueComponent
      },
      {
        path: 'stock',
        component: AbouttComponent
      },
      {
        path: 'inventory',
        component: IssueComponent
      },
      {
        path: 'daily',
        component: IssueComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
