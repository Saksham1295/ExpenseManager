/*   * By : Vismita Pavdighada   
     * Version : Spec 1.0   
     * Date : 29 - September - 2017   
*/
  import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
  import { MailotpService } from './mailotp.service';
  import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions,
  	Response, ResponseOptions,RequestMethod} from '@angular/http';
  	import {MockBackend, MockConnection } from '@angular/http/testing';
  	import { RouterTestingModule } from '@angular/router/testing';
  	import { By }              from '@angular/platform-browser';
  	import { DebugElement }    from '@angular/core';
  	import { Routes, RouterModule } from '@angular/router';
  	import { FormsModule } from '@angular/forms';

  	describe('MailotpService', () => {
  		let de:  DebugElement;
  		let el:  HTMLElement;
  		let mockBackend:any;
  		let mailotpService:any;
  		let data:any;
  		beforeEach( async(() => {
  			TestBed.configureTestingModule({
  				providers: [MailotpService,
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


  		it('should be created', inject([MailotpService], (service: MailotpService) => {
  			expect(service).toBeTruthy();
  		}));







  		it('send otp mail', fakeAsync(() => {


  			const mockResponse = {
  				body : "OTP sent"
  			};

  			let mailotpService: MailotpService = getTestBed().get(MailotpService);
  			mockBackend=TestBed.get(MockBackend);
  			mockBackend.connections.subscribe((connection: MockConnection) => {
  				expect(connection.request.method).toBe(RequestMethod.Post);
  				tick();
  				let RespMock = new Response(new ResponseOptions({body:mockResponse}));
  				connection.mockRespond(RespMock);
  				tick();
  				
  			});

  			//-------------------service method testing here--------------------------------
  			let object = {
  				
  				"email":"vismi.25@gmail.com",
  				"content":"Mail OTP Sent",
          "componnt":"Component"
  			}

  			


  			mailotpService.sendMailOTP(object.email,object.content,object.content).subscribe(
  				(res) => {
            
  					expect(res).toBeDefined();
  					tick();
  					expect(res._body.body).toBe("OTP sent");
  					
  				});
  		}));

  		it('verify otp - correct otp', fakeAsync(() => {


  			

  			let mailotpService: MailotpService = getTestBed().get(MailotpService);
  			mockBackend=TestBed.get(MockBackend);
  			mockBackend.connections.subscribe((connection: MockConnection) => {
  				expect(connection.request.method).toBe(RequestMethod.Post);
  				tick();
  				let RespMock = new Response(new ResponseOptions({body:1}));
  				connection.mockRespond(RespMock);
  				tick();
  				
  			});

  			//-------------------service method testing here--------------------------------
  			let object = {
  				
  				"otp":123456
  			}

  			


  			mailotpService.checkOTP(object.otp).subscribe(
  				(res) => {
            
  					expect(res).toBeDefined();
  					tick();
  					expect(res._body).toBe(1);
  					
  				});
  		}));

  		it('verify otp - incorrect otp', fakeAsync(() => {


  			

  			let mailotpService: MailotpService = getTestBed().get(MailotpService);
  			mockBackend=TestBed.get(MockBackend);
  			mockBackend.connections.subscribe((connection: MockConnection) => {
  				expect(connection.request.method).toBe(RequestMethod.Post);
  				tick();
  				let RespMock = new Response(new ResponseOptions({body:0}));
  				connection.mockRespond(RespMock);
  				tick();
  				
  			});

  			//-------------------service method testing here--------------------------------
  			let object = {
  				
  				"otp":123456
  			}

  			


  			mailotpService.checkOTP(object.otp).subscribe(
  				(res) => {
  					expect(res).toBeDefined();
  					tick();
  					expect(res._body).toBe(0);
  					
  				});
  		}));

  	});