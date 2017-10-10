/*   * By : Saksham Bhardwaj   
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
import { RegisterComponent } from './register.component';
import { RegisterService } from '../shared/register.service';
import { By } from '@angular/platform-browser';
import { MailotpService} from '../shared/mailotp.service';
/*class MockRegisterService extends RegisterService {
  public MockName: string = "MockLoginService ka naam"
  testFunction() {
    return 1;
  }
}*/
describe('RegisterComponent', () => {
  let component: RegisterComponent;
    let service: RegisterService;
    let serviceOTP: MailotpService;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el:      HTMLElement;
  let titleElement:      HTMLElement;
  let spy:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
                  HttpModule,
                  RouterModule,
                  //Router,
                  RouterTestingModule
                  ],
      declarations: [ RegisterComponent ],
      providers: [ RegisterService, MailotpService ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    
    
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    /*de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;*/
    
    //console.log(component.data.Email)
    //titleElement = fixture.debugElement.query(By.css('h2[id=loginHeader]')).nativeElement;
    service = TestBed.get(RegisterService);
    serviceOTP = TestBed.get(MailotpService);
    component.data.Fullname="Rekha Sharma"
    component.data.Email="rkha@gmail.com"
    component.data.Password="pass"
    component.data.ConfirmPassword="pass"
    component.data.Contact="9999999999" 
  });
  it('Component definition', () => {
    expect(component).toBeDefined();
  });
  it('registerAction', () => {
    
      spy = spyOn(service, 'tempUser').and.returnValue(service.data = component.data);
      
      expect(spy).toBeDefined();
      expect(service.data.Fullname).toBe(component.data.Fullname)
      expect(service.data.Email).toBe(component.data.Email)
      expect(service.data.Password).toBe(component.data.Password)
      expect(service.data.Contact).toBe(component.data.Contact)
      expect(service.data.ConfirmPassword).toBe(component.data.ConfirmPassword)
  });
  it('should send email', () => {
      let res:any;
      spyOn(serviceOTP, 'sendMailOTP').and.returnValue(res = "mail sent");   // <------- USE THIS "res" as flag as basis to call your second spy
      
      expect(spy).toBeDefined();
      expect(res).toBe("mail sent")
  });
/*  it('service is defined', () => {
     
     spyOn(service, "testFunction").and.callFake(function() {
    //console.log("I'm replacing the real function with this") ;
});
      expect(service).toBeDefined();
      service.testFunction()
  });*/
});