/*Created By - Prerna
Version - 1*/



import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ForgetPassComponent } from './forget-pass.component';
import { ForgetPassService } from  './forget-pass.service';
import { MailotpService} from '../shared/mailotp.service';
//import { DataStub } from './mockservice';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import * as config from './forget-pass.test.config.json';

/*Import all dependencies*/

describe('Forget Pass Component', () => {
  let data:any;
  let dataotp:any;
  let comp: ForgetPassComponent;
  let fixture: ComponentFixture<ForgetPassComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let service:ForgetPassService;
  let serviceotp : MailotpService;
  let spy:any;
  let word= (<any>config);

  /* Initialise all the variabless */

  beforeEach(async(() => {
    word.data;
    word.dataotp;
    TestBed.configureTestingModule({
      imports : [
      FormsModule, HttpModule, RouterTestingModule
      ],
      declarations: [
      ForgetPassComponent
      ],
      providers : [{ provide : ForgetPassService},{ provide : MailotpService} ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ForgetPassComponent);
    comp = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ForgetPassService);
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
  })); /*Create the test bed*/

  it('Component definition', ()=>{
    expect(comp).toBeDefined();
  })      
  /*Check whther the component is defined or not*/


  it("mail verification successfull", ()=>{

    spy=spyOn(service, 'verifyEmail').and.returnValue(Observable.of(word.data));
    spy=spyOn(service, 'verifyData').and.returnValue("prernathanai@gmail.com");
    comp.verifyEmail("prernathanai@gmail.com");
    fixture.detectChanges();
    expect(comp.values.Email).toEqual(word.data.Email);

  }); /*Mail verification*/



  it("mail verification not successfull", ()=>{

    spy=spyOn(service, 'verifyEmail').and.returnValue(Observable.of());
    spy=spyOn(service, 'verifyData').and.returnValue("prernathanai@gmail.com");
    comp.verifyEmail("prernathanai@gmail.com");
    fixture.detectChanges();
    expect(comp.values.Email).toEqual(undefined);

  })
}); /*Mail verification is notr successfull*/
