import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleoffComponent } from './saleoff.component';

describe('SaleoffComponent', () => {
  let component: SaleoffComponent;
  let fixture: ComponentFixture<SaleoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
