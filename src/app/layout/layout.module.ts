import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import { MenuItemsComponent } from './component/side-nav/menu-items/menu-items.component';

@NgModule({
  declarations: [FooterComponent, SideNavComponent, HeaderComponent, MenuItemsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule
  ],
  exports: [
    FooterComponent,
    SideNavComponent,
    FormsModule,
    HeaderComponent,
    MatFormFieldModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always', appearance: 'outline' },
    },
  ],
})
export class LayoutModule {}
