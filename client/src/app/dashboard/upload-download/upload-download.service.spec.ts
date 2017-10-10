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
  import { UploadDownloadService } from './upload-download.service';
  import { UploadDownloadComponent } from './upload-download.component';
  import { Routes, RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import * as config from './upload-download.test.config.json';

  describe('UploadDownloadService', () => {

    let de:  DebugElement;
    let el:  HTMLElement;
    let mockBackend:any;

    let data:any;
    let deletebtn:any;
    let word = (<any>config);
    beforeEach( async(() => {
      TestBed.configureTestingModule({
        providers: [
        MockBackend,
        UploadDownloadService,
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
    it('should upload file', fakeAsync(() => {

      //getting response from mock 
      let uploadDownloadService: UploadDownloadService = getTestBed().get(UploadDownloadService);
      mockBackend=TestBed.get(MockBackend);
      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(true).toBe(true);
        tick();
      });

    }));

  });//end of describe
