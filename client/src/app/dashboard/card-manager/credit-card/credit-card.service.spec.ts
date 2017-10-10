import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';

	import { CreditService } from './credit-card.service';
	import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions, Response, ResponseOptions,RequestMethod} from '@angular/http';
	import {MockBackend, MockConnection } from '@angular/http/testing'

	import * as config from './credit-card.config.json';
	import { RouterTestingModule } from '@angular/router/testing';
	import { By }              from '@angular/platform-browser';
	import { DebugElement }    from '@angular/core';
	import { CreditCardComponent } from './credit-card.component';
	import { Routes, RouterModule } from '@angular/router';
	import { FormsModule } from '@angular/forms';
	describe('CreditService', () => {
		let word=(<any>config).data;
		let dataRes=(<any>config).dataPos;
		let mockResponse=(<any>config).mockResponse;
		let de:  DebugElement;
		let el:  HTMLElement;
		let mockBackend:any;
		let data:any;
		let registerbtn:any;

		beforeEach( async(() => {
			TestBed.configureTestingModule({
				providers: [CreditService,
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
it('should be created', inject([CreditService], (service: 	CreditService) => {
			expect(service).toBeTruthy();
		}));
it('Positive test cases', fakeAsync(() => {
			let creditService: CreditService = getTestBed().get(CreditService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
				tick();
			});
			creditService.toggle(data).subscribe(
				(res) => {
					expect(res.flag).toBe(dataRes.flag);
				});

		}));

it('Negative test casas', fakeAsync(() => {
			let creditService: CreditService = getTestBed().get(CreditService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
				tick();

			});
			creditService.toggle(data).subscribe(
				(res) => {
					expect(res.flag).not.toEqual(word.flag);
				});
		}));
	});
