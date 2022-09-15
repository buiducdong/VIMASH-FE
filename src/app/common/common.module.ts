import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from './angular-material.module';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'YYYY'
  }
};

// const CommonComponents = [
//   DatatableComponent,
//   GroupSearchComponent,
// ];


@NgModule({
  declarations: [
    //...CommonComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TranslateModule,
    FormsModule,
    OverlayModule,
  ],
  exports: [
    //...CommonComponents,
    AngularMaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  bootstrap: [
    //...CommonComponents
  ]
})
export class CommonAppModule {
  public static forRoot(): ModuleWithProviders<CommonAppModule> {
    return {
      ngModule: CommonAppModule,
      providers: [
        /* ALL SERVICES HERE! */
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always', appearance: 'outline' } },
        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
      ]
    };
  }
}
