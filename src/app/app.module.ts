import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDestinationDetailComponent } from './pages/customer-destination-detail/customer-destination-detail.component';
import { CustomerDestiantionComponent } from './pages/customer-destination/customer-destiantion.component';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDestinationDetailComponent,
    CustomerDestiantionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
