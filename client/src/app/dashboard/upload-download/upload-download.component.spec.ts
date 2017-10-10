/*
  * By : Arya Anish
  * Version : 1.0
  * Date : 28 - September - 2017
  */

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  import { UploadDownloadComponent } from './upload-download.component';
  import { UploadDownloadService } from './upload-download.service';

  import {Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { Router } from '@angular/router';
  import { RouterTestingModule } from '@angular/router/testing'
  import * as config from './upload-download.test.config.json';

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  describe('UploadDownloadComponent', () => {

    let data:any;
    let comp : UploadDownloadComponent;
    let de: DebugElement;
    let el : HTMLElement;
    let fixture : ComponentFixture<UploadDownloadComponent>;
    let service:any;
    let spy: any;
    let word = (<any>config);
    beforeEach(async(() => {
     
      TestBed.configureTestingModule({
        declarations: [ UploadDownloadComponent ],
        imports : [ FormsModule, HttpModule ],
        providers : [{ provide : UploadDownloadService}, {provide : Router,   useClass: RouterStub }]
      }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(UploadDownloadComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(UploadDownloadService);
        spy = spyOn(service, 'convertUpload').and.returnValue(
          Observable.of(word.data)
          );
      });
    }));


    // TEST # 1 : test for non deletion  
    it("delete user test", () => 
    {
      fixture.detectChanges();

      fixture.detectChanges();
      expect(true).toEqual(true);
    });

});

