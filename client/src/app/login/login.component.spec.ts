   /*By:Shefali Singh
  Task: Frontend LoginComponent Testing
  Date: 29 September*/


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule }  from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { By } from '@angular/platform-browser';
import * as config from '../../config/multi_en_config.json';
import * as conf from './login.test.config.json';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: LoginService;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let titleElement:      HTMLElement;
  let spy:any;
  let  word= (<any>conf).login;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
      HttpModule,
      RouterModule,
      RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [ LoginService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {

        
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    titleElement = fixture.debugElement.query(By.css('h2[id=loginHeader]')).nativeElement;
    service = TestBed.get(LoginService);
  });
       /*  Test case for the field, email and password*/
  it('Component definition', () => {

    component.data.Email = 'word.email'
    component.data.Password='word.password'
    expect(component).toBeDefined();
  });
       /*Test case for the Login Heading*/
  it('loginHeader', () => {

    expect(titleElement.textContent).toContain(word.heading);
  });
       /* Test case for login action*/
  it('loginAction', () => {
    spy = spyOn(service, 'testFunction').and.returnValue(true);
    service

    expect(spy).toBeDefined();

  });
       /* Defining the service*/
  it('service is defined', () => {

    spyOn(service, "testFunction").and.callFake(function() {

    });
    expect(service).toBeDefined();
    service.testFunction()
  });


});





