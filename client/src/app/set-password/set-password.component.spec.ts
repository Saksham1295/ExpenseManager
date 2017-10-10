/*Created By - Prerna, Lakshay
Version - 1*/


import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { SetPasswordComponent } from './set-password.component';
import { SetPasswordService } from  './set-password.service';
import { MailotpService} from '../shared/mailotp.service';
//import { DataStub } from './mockservice';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import * as config from './set-password.test.config.json';
/*Import all dependencies*/

describe('Forget Pass Component', () => {
  let data:any;
  let dataNegative:any;
  let comp: SetPasswordComponent;
  let fixture: ComponentFixture<SetPasswordComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let service:SetPasswordService;
  let serviceotp : MailotpService;
  let spy:any;
  let word= (<any>config);
  /* initialise the variables */

  beforeEach(async(() => {
    word.data;
    word.dataNegative;

    TestBed.configureTestingModule({
      imports : [
      FormsModule, HttpModule, RouterTestingModule
      ],
      declarations: [
      SetPasswordComponent
      ],
      providers : [{ provide : SetPasswordService},{ provide : MailotpService} ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SetPasswordComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(SetPasswordService);
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
  }));

  it('Component definition', ()=>{
    expect(comp).toBeDefined();
  })  /*  Create a testbed */      
  


  it("Password Update successfull", ()=>{

    spy=spyOn(service, 'getValues').and.returnValue(Observable.of("prernathanai@gmail.com"));
    spy=spyOn(service, 'changePassword').and.returnValue(Observable.of(word.data));
    comp.changePassword("12345");

    fixture.detectChanges();
    expect(comp.value.ok).toEqual(word.data.ok);
    expect(comp.value.nModified).toEqual(word.data.nModified);
    expect(comp.value.n).toEqual(word.data.n);
  });
  /*expect the passowrd is changed or not*/


  it("Password Not Updated", ()=>{

    spy=spyOn(service, 'getValues').and.returnValue(Observable.of("prernathanai@gmail.com"));
    spy=spyOn(service, 'changePassword').and.returnValue(Observable.of(word.data));
    comp.changePassword("12345");

    fixture.detectChanges();
    expect(comp.value.ok).toEqual(word.dataNegative.ok);
    expect(comp.value.nModified).not.toEqual(word.dataNegative.nModified);
    expect(comp.value.n).not.toEqual(word.dataNegative.n);
  }); /* Password is not updated*/

});
