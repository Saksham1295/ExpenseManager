/*
  * By : Arya Anish
  * Version : 1.0
  * Date : 28 - September - 2017
  */

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  import { DeleteUserComponent } from './delete-user.component';
  import { DataStub } from './mock.service';
  import { DeleteUserService } from './delete-user.service';

  import {Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import { Router } from '@angular/router';
  import { RouterTestingModule } from '@angular/router/testing'
  import * as config from './delete-user.test.config.json';

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  describe('DeleteUserComponent', () => {

    let data:any;
    let comp : DeleteUserComponent;
    let de: DebugElement;
    let el : HTMLElement;
    let fixture : ComponentFixture<DeleteUserComponent>;
    let service:any;
    let spy: any;
    let word = (<any>config);
    beforeEach(async(() => {
     
      TestBed.configureTestingModule({
        declarations: [ DeleteUserComponent ],
        imports : [ FormsModule, HttpModule ],
        providers : [{ provide : DeleteUserService}, {provide : Router,   useClass: RouterStub }]
      }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(DeleteUserComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        comp.email = "test@test.com";
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(DeleteUserService);
        spy = spyOn(service, 'deleteUser').and.returnValue(
          Observable.of(word.data)
          );
      });
    }));


    // TEST # 1 : test for non deletion  
    it("delete user test", () => 
    {
      fixture.detectChanges();
      // initializing the attributes required
      comp.email = "test@test.com";
      comp.password = "test"
      comp.delete();
      fixture.detectChanges();
      expect(word.negativeMockResponse.ok).not.toEqual(word.data.ok);
    });

  });

