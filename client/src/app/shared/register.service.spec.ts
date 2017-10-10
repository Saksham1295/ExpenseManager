/*   * By : Saksham Bhardwaj   
     * Version : Spec 1.0   
     * Date : 29 - September - 2017   
*/

  import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
  import { RegisterService } from './register.service';
import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions,
    Response, ResponseOptions,RequestMethod} from '@angular/http';
  	import {MockBackend, MockConnection } from '@angular/http/testing';
  	import { RouterTestingModule } from '@angular/router/testing';
  	import { By }              from '@angular/platform-browser';
  	import { DebugElement }    from '@angular/core';
  	import { Routes, RouterModule } from '@angular/router';
  	import { FormsModule } from '@angular/forms';

  	describe('RegisterService', () => {
  		let de:  DebugElement;
  		let el:  HTMLElement;
  		let mockBackend:any;
  		let registerService:any;
  		let data:any;
  		beforeEach( async(() => {
  			TestBed.configureTestingModule({
  				providers: [RegisterService,
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


  		it('should be created', inject([RegisterService], (service: RegisterService) => {
  			expect(service).toBeTruthy();
  		}));


  		it('should register the user to backend', fakeAsync(() => {


  			const mockResponse = {
  				"ConfirmPassword":"laxman",
  				"Contact":"9999999999",
  				"DOB":"2017-09-14",
  				"Email":"vismi.25@gmail.com",
  				"Fullname":"Laxman",
  				"Password":"laxman"
  			};

  			let registerService: RegisterService = getTestBed().get(RegisterService);
  			mockBackend=TestBed.get(MockBackend);
  			mockBackend.connections.subscribe((connection: MockConnection) => {
  				expect(connection.request.method).toBe(RequestMethod.Post);
  				tick();
  				let Resp = new Response(new ResponseOptions({body:mockResponse}));
  				connection.mockRespond(Resp);
  				tick();
  				

  			});

  			//-------------------service method testing here--------------------------------
  			let object = {
  				"ConfirmPassword":"laxman",
  				"Contact":"9999999999",
  				"DOB":"2017-09-14",
  				"Email":"vismi.25@gmail.com",
  				"Fullname":"Laxman",
  				"Password":"laxman"
  			}

  			registerService.tempUser(object);
  			expect(registerService.data).toBe(object);



  			registerService.register().subscribe(
  				(res) => {
                    
                   
  					expect(res).toBeDefined();
  					tick();
  					expect(res.Email).toBe(object.Email);
  					tick();
  					expect(res.Password).toBe(object.Password);
  				});
  		}));

  		it('should not register the user to backend', fakeAsync(() => {


  			const mockResponse = {
  				"response":"already exist"
  			};

  			let registerService: RegisterService = getTestBed().get(RegisterService);
  			mockBackend=TestBed.get(MockBackend);
  			mockBackend.connections.subscribe((connection: MockConnection) => {
  				expect(connection.request.method).toBe(RequestMethod.Post);
  				tick();
  				let Resp = new Response(new ResponseOptions({body:mockResponse}));
  				connection.mockRespond(Resp);
  				tick();
  				

  			});

  			//-------------------service method testing here--------------------------------
  			let object = {
  				"ConfirmPassword":"laxman",
  				"Contact":"9999999999",
  				"DOB":"2017-09-14",
  				"Email":"vismi.25@gmail.com",
  				"Fullname":"Laxman",
  				"Password":"laxman"
  			}

  			registerService.tempUser(object);
  			expect(registerService.data).toBe(object);



  			registerService.register().subscribe(
  				(res) => {
                    
                   
  					expect(res).toBeDefined();
  					tick();
  					expect(res.response).toBe("already exist");
  				});
  		}));

  	});