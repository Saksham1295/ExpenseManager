/*   * By : Vismita Pavdighada   
     * Version : Spec 1.0   
     * Date : 29 - September - 2017   
*/


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule }  from '@angular/router/testing';
import { MailverificationComponent } from './mailverification.component';
import { By } from '@angular/platform-browser';
import { MailotpService} from '../shared/mailotp.service';
import { RegisterService} from '../shared/register.service';
import {Observable} from 'rxjs/Observable';
import * as config from './mailverification.test.config.json';
import  'rxjs/add/observable/of';

describe('MailverificationComponent', () => {
  let component: MailverificationComponent;
  let service :RegisterService;
    let serviceOTP: MailotpService;
  let fixture: ComponentFixture<MailverificationComponent>;
  let de: DebugElement;
  let el:      HTMLElement;
  let titleElement:      HTMLElement;
  let spy:any;
  let word= (<any>config);
  /*Settin gup the test bed */
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [ FormsModule,
                  HttpModule,
                  RouterModule,
                  //Router,
                  RouterTestingModule
                  ],
      declarations: [ MailverificationComponent ],
      providers: [ MailotpService, RegisterService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    
    
    fixture = TestBed.createComponent(MailverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    
    //console.log(component.data.Email)
    //titleElement = fixture.debugElement.query(By.css('h2[id=loginHeader]')).nativeElement;
    serviceOTP = TestBed.get(MailotpService);
    service = TestBed.get(RegisterService);
  });

  it('Component definition', () => {

    expect(component).toBeDefined();
  });


  it('correct otp submitted', () => {
      let res:any;
      let data =word.data;
    ///spyOn(service, 'tempUser').and.returnValue(service.data = data)
      spyOn(serviceOTP, 'checkOTP').and.returnValue(Observable.of(word.message).subscribe((res)=>{
        this.res = res

        
        //expect(res).toBe(true)
        spyOn(service, 'register').and.returnValue(Observable.of(service.data).subscribe((res)=>{

          console.log(service.data)
           expect(res).toBe(service.data)
        }));
      }));
   });

  it('wrong otp submitted', () => {
      let res:any;
      spyOn(serviceOTP, 'checkOTP').and.returnValue(component.valid = false);
      //console.log("wrong otp" + component.valid)
      
      if(component.valid==false){
        expect(res).toBeUndefined
      }

  });

/*  it('service is defined', () => {
     
     spyOn(service, "testFunction").and.callFake(function() {
    //console.log("I'm replacing the real function with this") ;
});
      expect(service).toBeDefined();
      service.testFunction()
  });*/

});





