
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CreditCardComponent } from './credit-card.component';
import * as config from './credit-card.config.json';
import { CreditService } from  './credit-card.service';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
describe('Credit Card component', () => {
  let word=(<any>config);
  let dataRes=(<any>config).dataRes;
  let dataResNeg=(<any>config).dataResNeg;
  let obj:any;  let comp : CreditCardComponent;
  let de: DebugElement;
  let el : HTMLElement;
  let fixture : ComponentFixture<CreditCardComponent>;
  let service: CreditService;

  beforeEach(async(() => {
    word.data; //calling data from json for beforeEach 

    TestBed.configureTestingModule({
      imports : [
      FormsModule, HttpModule
      ],
      declarations: [
      CreditCardComponent
      ],
      providers : [{ provide : CreditService}]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CreditService);
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  }));

  /*Positive Test cases for toggle method*/
  it("Positve test cases for toggle", () => {
    const spy = spyOn(service, 'toggle').and.returnValue(
      Observable.of(dataRes)

      )
    comp.obj={cardNo:1234567890987654,expDate:"11/10/2017",holderName:"rumani"};
    comp.toggle(comp.obj.cardNo);
    fixture.detectChanges();
    expect(dataRes.flag).toEqual(word.data.flag);

  })

  /*Negative Test cases for toggle method*/
  it("Negative test case for toggle", () => {
    const spy = spyOn(service, 'toggle').and.returnValue(
      Observable.of(dataResNeg)

      )
    comp.obj={cardNo:1234567890987654,expDate:"11/10/2017",holderName:"rumani"};
    comp.toggle(comp.obj.cardNo);
    fixture.detectChanges();
    expect(dataResNeg.flag).not.toEqual(word.data.flag);

  })
});

