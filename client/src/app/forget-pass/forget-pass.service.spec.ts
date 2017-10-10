/*Created By - Prerna
Version - 1*/

import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
import { ForgetPassService } from './forget-pass.service';
import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions,
  Response, ResponseOptions,RequestMethod} from '@angular/http';
  import {MockBackend, MockConnection } from '@angular/http/testing'
  import { RouterTestingModule } from '@angular/router/testing';
  import { By }              from '@angular/platform-browser';
  import { DebugElement }    from '@angular/core';
  import { ForgetPassComponent } from './forget-pass.component';
  import { Routes, RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { MailotpService } from '../shared/mailotp.service';
  import * as config from './forget-pass.test.config.json';
  /*Import all the dependencies */
  describe('Forget Password', () => {
    let de:  DebugElement;
    let el:  HTMLElement;
    let mockBackend:any;
    let loginService:any;
    let registerbtn:any;
    let mockResponse=(<any>config).mockResponse;
    let data=(<any>config).data;
    let dataNegative=(<any>config).dataNegative;
    /*intialize all the variable*/
    beforeEach( async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule,HttpModule,RouterModule,RouterTestingModule],
        providers: [ForgetPassService,MailotpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }]
      })
      .compileComponents();
    })); /*Create a testbed*/

    it('should be created', inject([ForgetPassService], (service: ForgetPassService) => {
      expect(service).toBeTruthy();
    })); /*Whther service is injected or not*/
    it('should verify Email', fakeAsync(() => {
      let forgetpassService: ForgetPassService = getTestBed().get(ForgetPassService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        tick();
        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
        tick();
      }); /* email verify */
      //-------------------service method testing here--------------------------------
      forgetpassService.verifyEmail(data).subscribe(
        (res) => {
          expect(res).toBeDefined();
          tick();
          expect(res.Email).toBe(data.Email);
          tick();
        });
    }));

    it('should not verify Email', fakeAsync(() => {
      let forgetpassService: ForgetPassService = getTestBed().get(ForgetPassService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        tick();
        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
        tick();
      }); /*Negative test*/
      //-------------------service method testing here--------------------------------
      let data: any ;
      forgetpassService.verifyEmail(dataNegative).subscribe(
        (res) => {
          expect(res).toBeDefined();
          tick();
          expect(res.Email).not.toEqual(dataNegative.Email);
          tick();

        });
    }));
  });
  