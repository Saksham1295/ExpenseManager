

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSettingComponent } from '../../src/app/dashboard/card-setting/card-setting.component';

describe('CardSettingComponent', () => {
  let component: CardSettingComponent;
  let fixture: ComponentFixture<CardSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

