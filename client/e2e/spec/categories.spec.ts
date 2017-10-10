

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { CategoriesComponent } from '../../src/app/dashboard/categories/categories.component';

describe('CategoriesComponent', () => {

it('should pass',function(){
  browser.get("http://localhost:4200/dashboard/categories");
  element(by.id('categ')).click();
  browser.pause();  

});
});


