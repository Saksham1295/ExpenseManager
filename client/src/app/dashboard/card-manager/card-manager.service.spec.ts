	import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
	import { CardManagerService } from './card-manager.service';
	import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions, Response, ResponseOptions,RequestMethod} from '@angular/http';
	import {MockBackend, MockConnection } from '@angular/http/testing';
	import { RouterTestingModule } from '@angular/router/testing';
	import { By }              from '@angular/platform-browser';
	import { DebugElement }    from '@angular/core';
	import { CardManagerComponent } from './card-manager.component';
	import { Routes, RouterModule } from '@angular/router';
	import { FormsModule } from '@angular/forms';
	import * as config from './card-manager.test.config.json';

	describe('CardManagerService', () => {
		//==============config file in json======================
		 let data: any =(<any>config).dataMod;
		 let dataResponse=(<any>config).dataResponse;
		let dataNeg=(<any>config).dataNeg;
		let mockResponse=(<any>config).mockResponse;
		let mockRes=(<any>config).mockRes;
		let word=(<any>config).dataRes;
		let de:  DebugElement;
		let el:  HTMLElement;
		let mockBackend:any;
		     

		beforeEach( async(() => {
			TestBed.configureTestingModule({
				providers: [CardManagerService,
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


		it('CardManager	should be created', inject([CardManagerService], (service: CardManagerService) => {
			expect(service).toBeTruthy();
		}));

		it('add cards into database', fakeAsync(() => {

			let cardmanagerService: CardManagerService = getTestBed().get(CardManagerService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
				tick();
			});

//-------------------service method testing here--------------------------------
		  
			cardmanagerService.addCard(data).subscribe(
				(res) => {
					expect(res).toBeDefined();
					tick();
					console.log(data);
					expect(res.ok).toBe(data.ok);
					tick();
					expect(res.nModified).toBe(data.nModified);
					tick();
					expect(res.n).toBe(data.n);
				});

		}));

it('add cards into database negative', fakeAsync(() => {

			let cardmanagerService: CardManagerService = getTestBed().get(CardManagerService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
				tick();

			});

//-------------------service method testing here--------------------------------

			cardmanagerService.addCard(word).subscribe(
				(res) => {
					expect(res).toBeDefined();
					tick();
					expect(res.ok).not.toEqual(word.ok);
					tick();
					expect(res.nModified).not.toEqual(word.nModified);
					tick();
					expect(res.n).not.toEqual(word.n);
				});

		}));

//========================================================================
it('get cards into database', fakeAsync(() => {

			let cardmanagerService: CardManagerService = getTestBed().get(CardManagerService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockRes})));
				tick();

			});

//-------------------service method testing here--------------------------------


			cardmanagerService.getData().subscribe(
				(res) => {
					expect(res).toBeDefined();
					tick();
					expect(res.cardNo).toBe(dataResponse.cardNo);
					tick();
					expect(res.cardHolderName).toBe(dataResponse.cardHolderName);
					tick();
					expect(res.expDate).toBe(dataResponse.expDate);
				});

		}));

it('get cards into database negative', fakeAsync(() => {

			let cardmanagerService: CardManagerService = getTestBed().get(CardManagerService);
			mockBackend=TestBed.get(MockBackend);
			mockBackend.connections.subscribe((connection: MockConnection) => {
				expect(connection.request.method).toBe(RequestMethod.Post);
				tick();
				connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
				tick();

			});

//-------------------service method testing here--------------------------------


			cardmanagerService.getData().subscribe(
				(res) => {
					expect(res).toBeDefined();
					tick();
					expect(res.cardNo).not.toEqual(dataNeg.cardNo);
					tick();
					expect(res.cardHolderName).not.toEqual(dataNeg.cardHolderName);
					tick();
					expect(res.expDate).not.toEqual(dataNeg.expDate);
				});

		}));
	});
