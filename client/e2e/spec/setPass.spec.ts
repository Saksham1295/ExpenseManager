

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { SetPasswordComponent } from '../../src/app/set-password/set-password.component';
describe('SetPasswordComponent', () => {
	it('SetPassword Testing',()=>{
		browser.get("http://localhost:4200/setpassword");
		element(by.name('Password')).sendKeys('p2@123');
		element(by.name('confirm')).sendKeys('p2@123');
		element(by.id('change')).click();
		browser.pause();   
	})
});

