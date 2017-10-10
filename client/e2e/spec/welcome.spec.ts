
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { browser,element,by } from 'protractor';
import { WelcomeComponent } from '../../src/app/welcome/welcome.component';
describe('WelcomeComponent', () => {
	
	it('should pass',()=>{
		browser.get("http://localhost:4200/welcome");
		expect(element(by.id('login')).getText()).toEqual("Login");
		element(by.id('login')).click();
	})
	
	it('should be register',()=>{
		expect(element(by.id('register')).getText()).toEqual("Register");
		element(by.id('register')).click();
		browser.pause();  

	})
});


