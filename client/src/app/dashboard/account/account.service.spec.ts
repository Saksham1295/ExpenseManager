import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions, Response, ResponseOptions,RequestMethod} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as config from './account.test.config.json';
describe('Add Account', () => {    
  let mockResponse=(<any>config).mockResponse;
  let data=(<any>config).dataResponse; 
  let dataRes=(<any>config).dataRes;
  let de:  DebugElement;
  let el:  HTMLElement;
  let mockBackend:any;
  let Email:any;
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      providers: [AccountService,
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
  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
  it('should insert new  entries', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
      tick();
    });

    //-------------------service method testing here--------------------------------
    accountService.addAccount().subscribe(
      (res) => {
        console.log("****************************************************************************************************************************************************************************",res);
        expect(res).toBeDefined();
        tick();
        expect(res.ok).toBe(data.ok);
        tick();
        expect(res.nModified).toBe(data.nModified);
        tick();
        expect(res.en).toBe(data.en);
        tick();
      });
  }));

  it(' NEGATIVE should insert new  entries', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
      tick();
    });

    //-------------------service method testing here--------------------------------
    accountService.addAccount().subscribe(
      (res) => {
        expect(res).toBeDefined();
        tick();
        expect(res.ok).not.toEqual(dataRes.ok);
        tick();
        expect(res.nModified).not.toEqual(dataRes.nModified);
        tick();
        expect(res.en).not.toEqual(dataRes.en);
        tick();
      });
  }));
});
describe('Get Account', () => {
  let de:  DebugElement;
  let el:  HTMLElement;
  let mockBackend:any;
  let Email:any;
  let mockRes=(<any>config).mockRes;
  let dataAcc=(<any>config).dataAcc;
  let dataAccNeg=(<any>config).dataAccNeg;
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      providers: [AccountService,
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
  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
  it('should Get the Existing account if any', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockRes})));
      tick();
    });

    //-------------------service Delete method testing here--------------------------------
    accountService.getAccount().subscribe(
      (res) => {
        console.log("Get RESPONSE  **************************************************************************************************************************************************************************** DELETE RESPONSE",res);
        expect(res).toBeDefined();
        tick();
        expect(res.Account[0].type).toBe(dataAcc.Account[0].type);
        tick();
        expect(res.Account[0].cardNo).toBe(dataAcc.Account[0].cardNo);
        tick();
      });
  }));
  it(' NEGATIVE should get  entries', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockRes})));
      tick();
    });

    //-------------------service method testing here--------------------------------

    accountService.getAccount().subscribe(
      (res) => {
        expect(res).toBeDefined();
        tick();
        expect(res.Account[0].type).not.toEqual(dataAccNeg.Account[0].type);
        tick();
        expect(res.Account[0].cardNo).not.toEqual(dataAccNeg.Account[0].cardNo);
        tick();
      });
  }));
});
describe('Delete Account', () => {
  let de:  DebugElement;
  let el:  HTMLElement;
  let mockBackend:any;
  let mockResponse=(<any>config).mockResponse;
  let data=(<any>config).dataResponse;
  let dataRes=(<any>config).dataRes;
  let Email:any;
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      providers: [AccountService,
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
  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
  it('should delete the existing account', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
      tick();
    });

    //-------------------service Delete method testing here--------------------------------

    accountService.deleteAccount().subscribe(
      (res) => {
        console.log("Delete RESPONSE  **************************************************************************************************************************************************************************** DELETE RESPONSE",res);
        expect(res).toBeDefined();
        tick();
        expect(res.ok).toBe(data.ok);
        tick();
        expect(res.nModified).toBe(data.nModified);
        tick();
        expect(res.en).toBe(data.en);
        tick();
      });
  }));
  it(' NEGATIVE should delete  entries', fakeAsync(() => {
    let accountService: AccountService = getTestBed().get(AccountService);
    mockBackend=TestBed.get(MockBackend);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      tick();
      connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));
      tick();
    });

    //-------------------service method testing here--------------------------------
    accountService.deleteAccount().subscribe(
      (res) => {
        expect(res).toBeDefined();
        tick();
        expect(res.ok).not.toEqual(dataRes.ok);
        tick();
        expect(res.nModified).not.toEqual(dataRes.nModified);
        tick();
        expect(res.en).not.toEqual(dataRes.en);
        tick();
      });
  }));
});

