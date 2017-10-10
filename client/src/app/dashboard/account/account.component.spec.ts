
/*impoting dependency*/

import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement } from '@angular/core';
import { AccountComponent } from './account.component';
import {AccountService} from './account.service';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import * as config from './account.test.config.json';

describe('AccountComponent',()=>{
 let word = (<any>config);

  let data:any;
  let mockNegativeData:any;
  let negativeData:any;
  let comp : AccountComponent;
  let fixture : ComponentFixture<AccountComponent>;
  let service:AccountService;
  let spy: any;
  let mockData:any;

  beforeEach(async(()=>{
    /*mock response of getting account details*/ 
    word.data;
    word.negativeData;
    word.mockData;
    word.mockNegativeData;
     TestBed.configureTestingModule({
        imports:[
        FormsModule,HttpModule],
        declarations:[
        AccountComponent],
        providers:[  {provide: AccountService} ]
      }).compileComponents();
    }));

  beforeEach(async()=>{
    fixture = TestBed.createComponent(AccountComponent);
    comp=fixture.componentInstance;
    service=fixture.debugElement.injector.get(AccountService);
    spy=spyOn(service,'getAccount').and.returnValue(
      Observable.of(word.data)
      )
  });

  /* getting account details*/
  it("get account successful",()=>{
    comp.getAccount();
    fixture.detectChanges();
    expect(comp.value.Account).toEqual(word.data.Account);
  })

  it("get account unsuccessful",()=>{
    comp.getAccount();
    fixture.detectChanges();
    expect(comp.value.Account).not.toEqual(word.negativeData.Account);
  })

  /*create account*/
  it("created account successful",()=>{
    spy=spyOn(service,'addAccount').and.returnValue(Observable.of(word.mockData));
    comp.addAccount();
    fixture.detectChanges();
    expect(comp.result).toEqual(word.mockData);
  });

  it("created account unsuccessful",()=>{
    spy=spyOn(service,'addAccount').and.returnValue(Observable.of(word.mockData));
    comp.addAccount();
    fixture.detectChanges();
    expect(comp.result).not.toEqual(word.mockNegativeData);
  });
it("deleted account successful",()=>{
    spy=spyOn(service,'deleteAccount').and.returnValue(
      Observable.of(word.mockData)
      )
    comp.deleteAccount();
    fixture.detectChanges();
    expect(comp.result).toEqual(word.mockData);
  })
  /*delete account*/
  it("deleted account unsuccessful",()=>{
    spy=spyOn(service,'deleteAccount').and.returnValue(
      Observable.of(word.mockData)
      )
    comp.deleteAccount();
    fixture.detectChanges();
    expect(comp.result).not.toEqual(word.mockNegativeData);
  })
})

