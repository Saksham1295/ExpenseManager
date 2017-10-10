  /*By:Shefali Singh
  Task: Frontend Login Service Testing
  Date: 29 September*/


  import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
  import { LoginService } from './login.service';
  import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions,
   Response, ResponseOptions,RequestMethod} from '@angular/http';
  import {MockBackend, MockConnection } from '@angular/http/testing';
  import { RouterTestingModule } from '@angular/router/testing';
  import { By }              from '@angular/platform-browser';
  import { DebugElement }    from '@angular/core';
  import { LoginComponent } from './login.component';
  import { Routes, RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';

  describe('LoginService', () => {
    let de:  DebugElement;
    let el:  HTMLElement;
    let mockBackend:any;
    let loginService:any;
    let data:any;
    let registerbtn:any;
    beforeEach( async(() => {
      TestBed.configureTestingModule({
        providers: [LoginService,
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
    }));

         /* Test case for the service ,that it exists*/
    it('should be created', inject([LoginService], (service: LoginService) => {
      expect(service).toBeTruthy();
    }));

              /*Test case for inserting new entries*/
    it('should insert new  entries', fakeAsync(() => {
      const mockResponse = {
        Email:"stshivam@gmail.com",
        Password:"Shivam@123"
      };

      let loginService: LoginService = getTestBed().get(LoginService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        tick();
        let Resp = new Response(new ResponseOptions({body:mockResponse}));
        connection.mockRespond(Resp);
        tick();

        
      });

//-------------------service method testing here--------------------------------


      let data= {
        
        Email:"stshivam@gmail.com",
        Password:"Shivam@123"

      }
      

      loginService.login(data).subscribe(
        (res) => {
      
          expect(res).toBeDefined();
          tick();
          expect(res.Email).toBe(data.Email);
          tick();
          expect(res.Password).toBe(data.Password);
        });
    }));
          /* test case for not accepting wrong password*/
    it('should not accept wrong password', fakeAsync(() => {



      const mockResponse = {

        
        Email:"stshivam@gmail.com",
        Password:"Shivam@123"

      };

      let loginService: LoginService = getTestBed().get(LoginService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        tick();
        let Resp = new Response(new ResponseOptions({body:mockResponse}));
        connection.mockRespond(Resp);
        tick();
        
      });

//-------------------service method testing here--------------------------------


      let data= {        
        Email:"stshivam@gmail.com",
        Password:"Shivam"
      }
      loginService.login(data).subscribe(
        (res) => {
          
          expect(res).toBeDefined();
          tick();
          expect(res.Email).toBe(data.Email);
          tick();
          expect(res.Password).not.toBe(data.Password);
        });
    }));

    /*Test case for not accepting wrong email*/
    it('should not accept wrong email', fakeAsync(() => {



      const mockResponse = {

        
        Email:"stshivam@gmail.com",
        Password:"Shivam@123"

      };

      let loginService: LoginService = getTestBed().get(LoginService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        tick();
        let Resp = new Response(new ResponseOptions({body:mockResponse}));
        connection.mockRespond(Resp);
        tick();
        
      });

//-------------------service method testing here--------------------------------


      let data= {        
        Email:"stshivamm@gmail.com",
        Password:"Shivam@123"
      }
      loginService.login(data).subscribe(
        (res) => {
         
          expect(res).toBeDefined();
          tick();
          expect(res.Email).not.toBe(data.Email);
        });
    }));
  });

