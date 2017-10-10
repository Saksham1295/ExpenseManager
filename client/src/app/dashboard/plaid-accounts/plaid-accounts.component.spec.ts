import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaidAccountsComponent } from './plaid-accounts.component';

describe('PlaidAccountsComponent', () => {
  let component: PlaidAccountsComponent;
  let fixture: ComponentFixture<PlaidAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaidAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaidAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
