import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { IssueComponent } from './pages/issue/issue.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'system',
    pathMatch: 'full',
  },
  {
    path: 'system',
    loadChildren: () => import('./pages/system/system.module').then((m) => m.SystemModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
