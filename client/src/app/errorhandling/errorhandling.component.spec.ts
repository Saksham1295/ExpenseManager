import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorhandlingComponent } from './errorhandling.component';

describe('ErrorhandlingComponent', () => {
  let component: ErrorhandlingComponent;
  let fixture: ComponentFixture<ErrorhandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorhandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorhandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
