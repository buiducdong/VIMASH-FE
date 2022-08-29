import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableCustomerComponent } from './datatable-customer.component';

describe('DatatableCustomerComponent', () => {
  let component: DatatableCustomerComponent;
  let fixture: ComponentFixture<DatatableCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
