



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { DashboardComponent } from '../../src/app/dashboard/dashboard.component';

describe('DashboardComponent', () => {
 
 it('should pass',function(){
   browser.get("http://localhost:4200/dashboard/charts");
   element(by.id('sign')).click();
   browser.pause();   

 })

});