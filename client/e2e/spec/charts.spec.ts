


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { ChartsComponent } from '../../src/app/dashboard/charts/charts.component';

describe('ChartsComponent', () => {
 
 it('should initialize',function(){
   browser.get("http://localhost:49152/dashboard/charts");

   element(by.id('startdate')).sendKeys('2017-09-16');
   //expect(element(by.id('headingtext')).toEqual("dashboard");
   element(by.id('submit')).click();
   var myElement = element(by.id('monthChart'));
    expect(myElement.isPresent()).toBeTruthy();
   
   element(by.id('weekToggle')).click();
   myElement = element(by.id('weekChartTotal'));
    expect(myElement.isPresent()).toBeTruthy();
   element(by.id('monthToggle')).click();
   element(by.id('submit')).click();
   myElement = element(by.id('monthChart'));
    expect(myElement.isPresent()).toBeTruthy();

   myElement = element(by.id('totalBudget'));
    expect(myElement.isPresent()).toBeTruthy();
   myElement = element(by.id('totalExpense'));
    expect(myElement.isPresent()).toBeTruthy();
 myElement = element(by.id('topspentcategory'));
    expect(myElement.isPresent()).toBeTruthy();
 

   browser.pause();  

 })

});
