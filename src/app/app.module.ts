import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDestinationDetailComponent } from './pages/system/customer-destination-detail/customer-destination-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { SystemModule } from './pages/system/system.module';
import { SideNavComponent } from './layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
