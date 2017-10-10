
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CardManagerComponent } from './card-manager.component';
import {CreditCardComponent} from './credit-card/credit-card.component';
import { CardManagerService } from  './card-manager.service';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as config from './card-manager.test.config.json';

describe('CardManagerComponent', () => {
  //config file in json
  let word=(<any>config);       
  let data:any;
  let comp : CardManagerComponent;
  let de: DebugElement;
  let el : HTMLElement;
  let fixture : ComponentFixture<CardManagerComponent>;
  let service:CardManagerService;
  let spyGetData: any;
  let expectedVal=word.expectedVal;
  
  //===============Before each of test cases====================
  beforeEach(async(() => {
    word.data;

    TestBed.configureTestingModule({
      declarations: [CardManagerComponent, CreditCardComponent],
      imports : [
      FormsModule, HttpModule
      ],
      providers : [{provide: CardManagerService}]
    }).compileComponents();
    fixture = TestBed.createComponent(CardManagerComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CardManagerService);
    spyGetData = spyOn(service, 'getData').and.returnValue(
      Observable.of(expectedVal)
    );
  }));

//===========checks for the expected data=======================
   it("get Card successful", () => {
    fixture.detectChanges();
    expect(comp.cardData).toEqual(expectedVal);
    expect(spyGetData.calls.any()).toEqual(true);
  })

//=====================checks for the negative=================
   it("get Card successful negative", () => {
    fixture.detectChanges();
    expect(comp.cardData).toEqual(expectedVal);
    expect(spyGetData.calls.any()).not.toEqual(false);
  })

//==============checks for the expected add card successful=======
  it("add Card successful", () => {
    const spy = spyOn(service, 'addCard').and.returnValue(
      Observable.of(word.data)
      )
    comp.data={"cardNo":"12123","cvv":"111","holderName":"Kuldeep","expDate":"2010-12-12"};
    comp.addCard();
    fixture.detectChanges();
    expect(comp.testRes.ok).toEqual(word.data.ok);
    expect(comp.testRes.nmodified).toEqual(word.data.nmodified);
    expect(comp.testRes.n).toEqual(word.data.n);
  })

//============add card already exists negative======================
  it("add Card already exist negative", () => {
    let negdata={message:word.negData};
    const spy = spyOn(service, 'addCard').and.returnValue(
      Observable.of(negdata)
      )
    comp.data={"cardNo":"12123","cvv":"111","holderName":"Kuldeep","expDate":"2010-12-12"};
    comp.addCard();
    fixture.detectChanges();
    expect(comp.testRes.message).toEqual(negdata.message);
  })

//========add card successful negative,card already exists==============
  it("add Card successful negative", () => {
    let negdata={message:word.negData};
    const spy = spyOn(service, 'addCard').and.returnValue(
      Observable.of(negdata)
      )
    comp.data={"cardNo":"12123","cvv":"111","holderName":"Kuldeep","expDate":"2010-12-12"};
    comp.addCard();
    fixture.detectChanges();
    expect(comp.testRes.message).not.toEqual('card already');
  })
});


