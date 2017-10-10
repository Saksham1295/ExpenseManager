/* 

Name:Nikhil Gupta
Date last modified :29/09/17

*/

//----------------------------------------imported files---------------------------------------------//

import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
import {LoginuserService} from '../../shared/loginuser.service'
import { ResetpassService } from './resetpass.service';
import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions, Response, ResponseOptions,RequestMethod} from '@angular/http';	
import {MockBackend, MockConnection } from '@angular/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as conf from './ResetPasswordComponent.test.config.json';
import{ResetPasswordComponent} from './reset-password.component';
import {ComponentFixture} from '@angular/core/testing';

//--------------------------------------------------------------------------------------------------//


//----------------------------------------declared variables--------------------------------------- //

describe('ResetService', () => {

	let  word= (<any>conf).reset;
	let fixture:ComponentFixture<ResetPasswordComponent>;
	let de:  DebugElement;
	let el:  HTMLElement;
	let mockBackend:any;
	let signupService:any;
	let data:any;
	let registerbtn:any;
	let spy:any;

//--------------------------------------------------------------------------------------------------//


//-------------------------------------------async before each--------------------------------------// 
	beforeEach( async(() => {

		TestBed.configureTestingModule({
			providers: [ResetpassService,
			MockBackend,
			BaseRequestOptions,LoginuserService,
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

//--------------------------------------------------------------------------------------------------//


//-----------------------------------------positive test case---------------------------------------//

it('resest password service should be created', inject([ResetpassService], (service: ResetpassService) => {
		expect(service).toBeTruthy();
	}));
//--------------------------------------------------------------------------------------------------//


//-----------------------------------------positive test case---------------------------------------//
	
	it('matched old password and successfully updated new password', fakeAsync(() => {



		const mockResponse = {
			"ok": 1,
			"nModified": 1,
			"n": 1
		};

		let signupService: ResetpassService = getTestBed().get(ResetpassService);
		mockBackend=TestBed.get(MockBackend);
		mockBackend.connections.subscribe((connection: MockConnection) => {
			expect(connection.request.method).toBe(RequestMethod.Post);
			tick();
			connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
			tick();

		});



		let data: any ;

		data = {
			Email:"nkhl02@gmail.com",
			opass:"12345",
			npass:"54321"
		}


		signupService.resetPass(data).subscribe(
			(res) => {
				expect(res).toBeDefined();
				tick();
				expect(res.ok).toBe(1);
				tick();
				expect(res.nModified).toBe(1);
				tick();
				expect(res.n).toBe(1);
			});
	}));

//--------------------------------------------------------------------------------------------------//
	

//-----------------------------------------negative test case---------------------------------------//

	it('did not matched old password', fakeAsync(() => {



		const mockResponse = {
			"ok": 1,
			"nModified": 0,
			"n": 1
		};

		let signupService: ResetpassService = getTestBed().get(ResetpassService);
		mockBackend=TestBed.get(MockBackend);
		mockBackend.connections.subscribe((connection: MockConnection) => {
			expect(connection.request.method).toBe(RequestMethod.Post);
			tick();
			connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
			tick();

		});



		let data: any ;

		data = {
			Email:"nkhl02@gmail.com",
			opass:"",
			npass:"54321"
		}


		signupService.resetPass(data).subscribe(
			(res) => {
				expect(res).toBeDefined();
				tick();
				expect(res.ok).toBe(1);
				tick();
				expect(res.nModified).toBe(0);
				tick();
				expect(res.n).toBe(1);
			});
	}));

//--------------------------------------------------------------------------------------------------//


//-----------------------------------------negative test case---------------------------------------//

	it('provided invalid new password', fakeAsync(() => {



		const mockResponse = {
			"ok": 1,
			"nModified": 0,
			"n": 0

		};

		let signupService: ResetpassService = getTestBed().get(ResetpassService);
		mockBackend=TestBed.get(MockBackend);
		mockBackend.connections.subscribe((connection: MockConnection) => {
			expect(connection.request.method).toBe(RequestMethod.Post);
			tick();
			connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
			tick();

		});




		let data: any ;

		data = {
			Email:"",
			opass:"123",
			npass:"54321"
		}


		signupService.resetPass(data).subscribe(
			(res) => {
				expect(res).toBeDefined();
				tick();
				expect(res.ok).toBe(1);
				tick();
				expect(res.nModified).toBe(0);
				tick();
				expect(res.n).toBe(0);
			});
	}));

//--------------------------------------------------------------------------------------------------//

});
