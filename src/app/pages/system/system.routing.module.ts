import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
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
        component: AboutComponent,
        children: [
          {
            path: 'child1',
            component: AboutComponent
          },
          {
            path: 'child2',
            component: AboutComponent
          },
        ]
      },
      {
        path: 'issue',
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
