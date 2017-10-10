

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { CreateCategoryComponent } from '../../src/app/dashboard/categories/create-category/create-category.component';

describe('CreateCategoryComponent', () => {
  it('should pass',function(){
  browser.get("http://localhost:4200/dashboard/categories");
  element(by.id('categoryName')).sendkeys("Tax");
  element(by.id('delete')).click();
  browser.pause();  

})
});

