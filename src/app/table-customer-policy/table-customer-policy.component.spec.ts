import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomerPolicyComponent } from './table-customer-policy.component';

describe('TableCustomerPolicyComponent', () => {
  let component: TableCustomerPolicyComponent;
  let fixture: ComponentFixture<TableCustomerPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCustomerPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
