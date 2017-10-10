/*
  * By : Arya Anish
  * Version : Spec 1.0
  * Date : 27 - September - 2017
  */

  import { TestBed, inject, async, getTestBed ,tick, fakeAsync  } from '@angular/core/testing';
  import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions, Response, ResponseOptions,RequestMethod} from '@angular/http';
  import {MockBackend, MockConnection } from '@angular/http/testing'
  import { RouterTestingModule } from '@angular/router/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  import { DeleteUserService } from './delete-user.service';
  import { DeleteUserComponent } from './delete-user.component';
  import { Routes, RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import * as config from './delete-user.test.config.json';


  describe('DeleteUserService', () => {


  	let de:  DebugElement;
  	let el:  HTMLElement;
  	let mockBackend:any;

  	let deleteUserService:any;
  	let data:any;
  	let deletebtn:any;
  	let word = (<any>config);
  	beforeEach( async(() => {
  		TestBed.configureTestingModule({
  			providers: [DeleteUserService,
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


  	// #Positive Test
  	it('should delete  user', fakeAsync(() => {

  		//getting response from mock 
  		let deleteUserService: DeleteUserService = getTestBed().get(DeleteUserService);
  		mockBackend=TestBed.get(MockBackend);
  		mockBackend.connections.subscribe((connection: MockConnection) => {
  			expect(connection.request.method).toBe(RequestMethod.Post);
  			tick();
  			connection.mockRespond(new Response(new ResponseOptions({body:word.mockResponse})));
  			tick();
  		});


  		//-------------------service method testing here--------------------------------

  		// data will be tested against response
  		
  		deleteUserService.deleteUser(word.data).subscribe(
  			(res) => {
  				
  				expect(res).toBeDefined();
  				tick();
  				expect(res.ok).toBe(word.data.ok);
  				tick();
  				expect(res.n).toBe(word.data.n);
  			});
  	}));

  });//end of describe
