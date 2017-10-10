

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { CardManagerComponent } from '../../src/app/dashboard/card-manager/card-manager.component';

describe('CardManagerComponent', () => {
 
 it('card manager should pass',function(){
   browser.get("http://localhost:4200/dashboard/cardmanager");
 element(by.id('but1')).click();
   browser.pause();   

 })

});
