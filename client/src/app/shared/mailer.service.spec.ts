/*Created By - Prerna

Version - 1*/

import { TestBed, inject, async, getTestBed ,tick, fakeAsync } from '@angular/core/testing';

import { MailerService } from './mailer.service';

import { Http, HttpModule , XHRBackend, ConnectionBackend,Connection, BaseRequestOptions,

  Response, ResponseOptions,RequestMethod} from '@angular/http';

  import {MockBackend, MockConnection } from '@angular/http/testing'

  import { RouterTestingModule } from '@angular/router/testing';

  import { By }              from '@angular/platform-browser';

  import { DebugElement }    from '@angular/core';

  import { Routes, RouterModule } from '@angular/router';

  import { FormsModule } from '@angular/forms';

  import { MailotpService } from '../shared/mailotp.service';

  import * as config from './mailer.test.config.json';

  /*Import all the dependencies */

  describe('Mailer Service', () => {

    let de:  DebugElement;

    let el:  HTMLElement;

    let mockBackend:any;

    let loginService:any;

    let registerbtn:any;

    let spy:any;

    let mockResponse=(<any>config).mockResponse;

    let data=(<any>config).data;

    let dataUndefined=(<any>config).dataUndefined;

let dataNegative=(<any>config).dataNegative;

    

   // let dataNegative=(<any>config).dataNegative;

    /*intialize all the variable*/

    beforeEach( async(() => {

      TestBed.configureTestingModule({

        imports: [FormsModule,HttpModule,RouterModule,RouterTestingModule],

        providers: [MailerService,

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

    it('should be created', inject([MailerService], (service: MailerService) => {

      expect(service).toBeTruthy();

    })); /*Whther service is injected or not*/

  

      //-------------------service method testing here--------------------------------

  it('should get User details', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));

        tick();

      }); 

      mailerService.getValues(data).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res.Email).toBe(data.Email);

          tick();

          expect(res.contact).toBe(data.contact);

          tick();

          expect(res.dob).toBe(data.dob);

          tick();

          expect(res.fullName).toBe(data.fullName);

          tick();

          expect(res.category.budget).toBe(data.category.budget);

          tick();

          expect(res.category.categoryName).toBe(data.category.categoryName);

          tick();

          expect(res.category.categoryId).toBe(data.category.categoryId);

          tick();

          expect(res.transaction.description).toBe(data.category.description);

          tick();

          expect(res.transaction.expense).toBe(data.category.expense);

          tick();

          expect(res.transaction.date).toBe(data.category.date);

          tick();

          expect(res.transaction.categoryId).toBe(data.category.categoryId);

          tick();

          expect(res.transaction.account_id).toBe(data.category.account_id);

          tick();

          expect(res.transaction.transaction_id).toBe(data.category.transaction_id);

          tick();

          expect(res.account.type).toBe(data.account.type);

          tick();

          expect(res.account.name).toBe(data.account.name);

          tick();

          expect(res.account.balances).toBe(data.account.balances);

          tick();

          expect(res.account.account_id).toBe(data.account.account_id);

          tick();

        });

    }));    

  it('should not get User details', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));

        tick();

      }); 

      mailerService.getValues(dataNegative).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res.email).not.toEqual(dataNegative.email);

          tick();

})

}));

      it('User entered undefined values', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));

        tick();

      }); 

      mailerService.getValues(dataUndefined).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(dataUndefined.email).toBe("undefined");

          tick();

});

    }));

it('Returned undefined values', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponse})));

        tick();

      }); 

      mailerService.getValues(data).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res.email).not.toEqual(dataUndefined.email);

          tick();

});

    }));

  });

  

  describe('Mailer Service', () => {

    let de:  DebugElement;

    let el:  HTMLElement;

    let mockBackend:any;

    let loginService:any;

    let registerbtn:any;

    let spy:any;

    let mockResponseCategoryMail=(<any>config).mockResponseCategoryMail;

    let subject=(<any>config).subject;

    let subjectUndefined=(<any>config).subjectUndefined;

    let component=(<any>config).component;

    let componentUndefined=(<any>config).componentUndefined;

    let categoryMail=(<any>config).categoryMail;

    let categoryMailNegative=(<any>config).categoryMailNegative;

    let categoryMailUndefined=(<any>config).categoryMailUndefined;

    /*let data=(<any>config).data;

    let dataUndefined=(<any>config).dataUndefined;

let dataNegative=(<any>config).dataNegative;*/

   // let dataNegative=(<any>config).dataNegative;

    /*intialize all the variable*/

    beforeEach( async(() => {

      TestBed.configureTestingModule({

        imports: [FormsModule,HttpModule,RouterModule,RouterTestingModule],

        providers: [MailerService,

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

    it('should be created', inject([MailerService], (service: MailerService) => {

      expect(service).toBeTruthy();

    })); /*Whther service is injected or not*/

   it('should send category budget mail', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

            console.log(res,res._body,"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

          expect(res._body).toBeDefined();

          tick();

          expect(res._body.ok).toBe(mockResponseCategoryMail.ok);

          tick();

          expect(res._body.status).toBe(mockResponseCategoryMail.status);

          tick();

          expect(res._body.statusText).toBe(mockResponseCategoryMail.statusText);

          tick();

})

})); 

   it('should not send category budget mail', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res._body.ok).not.toEqual(categoryMailNegative.ok);

          tick();

})

})); 

   it('Data send undefined for Category Mail send', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(categoryMail.email).toBe("undefined");

          tick();

})

})); 

   it('Response undefined for category mail undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res.status).not.toEqual(categoryMailUndefined.status);

          tick();

})

})); 

      it('Data as subject send undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(subjectUndefined.message).toBe("undefined");

          tick();

})

})); 

      it('Data as component send undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(componentUndefined.message).toBe("undefined");

          tick();

})

})); 

});

  describe('Mailer Service', () => {

    let de:  DebugElement;

    let el:  HTMLElement;

    let mockBackend:any;

    let loginService:any;

    let registerbtn:any;

    let spy:any;

    let mockResponseCategoryMail=(<any>config).mockResponseCategoryMail;

    let subject=(<any>config).subject;

    let subjectUndefined=(<any>config).subjectUndefined;

    let component=(<any>config).component;

    let componentUndefined=(<any>config).componentUndefined;

    let categoryMail=(<any>config).categoryMail;

    let categoryMailNegative=(<any>config).categoryMailNegative;

    let categoryMailUndefined=(<any>config).categoryMailUndefined;

    /*let data=(<any>config).data;

    let dataUndefined=(<any>config).dataUndefined;

let dataNegative=(<any>config).dataNegative;*/

   // let dataNegative=(<any>config).dataNegative;

    /*intialize all the variable*/

    beforeEach( async(() => {

      TestBed.configureTestingModule({

        imports: [FormsModule,HttpModule,RouterModule,RouterTestingModule],

        providers: [MailerService,

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

    it('should be created', inject([MailerService], (service: MailerService) => {

      expect(service).toBeTruthy();

    })); /*Whther service is injected or not*/

   it('should send category budget mail', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendTotalBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

            console.log(res,res._body,"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

          expect(res._body).toBeDefined();

          tick();

          expect(res._body.ok).toBe(mockResponseCategoryMail.ok);

          tick();

          expect(res._body.status).toBe(mockResponseCategoryMail.status);

          tick();

          expect(res._body.statusText).toBe(mockResponseCategoryMail.statusText);

          tick();

})

})); 

   it('should not send category budget mail', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res._body.ok).not.toEqual(categoryMailNegative.ok);

          tick();

})

})); 

   it('Data send undefined for Category Mail send', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(categoryMail.email).toBe("undefined");

          tick();

})

})); 

   it('Response undefined for category mail undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(res.status).not.toEqual(categoryMailUndefined.status);

          tick();

})

})); 

      it('Data as subject send undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(subjectUndefined.message).toBe("undefined");

          tick();

})

})); 

      it('Data as component send undefined', fakeAsync(() => {

      let mailerService: MailerService = getTestBed().get(MailerService);

      mockBackend=TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {

        expect(connection.request.method).toBe(RequestMethod.Post);

        tick();

        connection.mockRespond(new Response(new ResponseOptions({body:mockResponseCategoryMail})));

        tick();

      }); 

      mailerService.sendBudgetMail(categoryMail, subject, component).subscribe(

        (res) => {

          expect(res).toBeDefined();

          tick();

          expect(componentUndefined.message).toBe("undefined");

          tick();

})

})); 

});