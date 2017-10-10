import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlaidAccountComponent } from './display-plaid-account.component';

describe('DisplayPlaidAccountComponent', () => {
  let component: DisplayPlaidAccountComponent;
  let fixture: ComponentFixture<DisplayPlaidAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlaidAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlaidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
