import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AbouttComponent } from '../about/child2.component';
import { IssueComponent } from '../issue/issue.component';
import { CustomerDestinationDetailComponent } from './customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './customer-destination/customer-destiantion.component';
import { SystemComponent } from './system.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  {
    path: '', component: SystemComponent, children: [
      {
        path: 'customer', component: CustomerDestiantionComponent
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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
