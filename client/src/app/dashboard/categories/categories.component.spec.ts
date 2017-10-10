/*
  * Modified version by : Anurag and Nishant
  * modified version date : 28 - September - 2017
  */
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import {HttpModule} from '@angular/http';
  import { CategoriesComponent } from './categories.component';
  import {FormsModule} from '@angular/forms';
  import {DebugElement} from '@angular/core';
  import {By} from '@angular/platform-browser';
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import {CategoryService} from './category.service';
  import {LoginuserService } from '../../shared/loginuser.service';
  import * as configTest from './categories.test.config.json';

  describe('CategoriesComponent', () => {
    let data:any;
    let component: CategoriesComponent;
    let fixture: ComponentFixture<CategoriesComponent>;
    let service;
    let spy;
    let test=(<any>configTest).categories;

    //initializing the test suite

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CategoriesComponent],
        imports:[HttpModule,FormsModule],
        providers:[CategoryService,LoginuserService]
      })
      .compileComponents();
      fixture = TestBed.createComponent(CategoriesComponent);
      component = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategoryService);
      data=test.category;
      spy =spyOn(service,'getCategory').and.returnValue(Observable.of(data)); 

    }));

    //test cases for get category method
    it("testing the get category",()=>{
      fixture.detectChanges();
      expect(component.categoryObjects).toEqual(data);
      component.getCategory(); 
      fixture.detectChanges();
    })

    //test case for add category method
    it("testing the add category method",()=>{
      let data=test.response;
      spy =spyOn(service,'addCategory').and.returnValue(Observable.of(data));
      component.data=test.categoryData;
      component.addCategory();
      fixture.detectChanges();
      console.log("this is spy response",component.addcategoryResult.n);
      expect(component.addcategoryResult.n).toEqual(1);
      expect(component.addcategoryResult.nModified).toEqual(1);
      expect(component.addcategoryResult.ok).toEqual(1);
    })
    //negative test case for add category method 

    it("negative test for add category method",()=>{
      let data=test.response;
      let negativeData=test.categoryResponse;
      spy =spyOn(service,'addCategory').and.returnValue(Observable.of(data));
      component.data=test.categoryData;
      component.addCategory();
      fixture.detectChanges();
      console.log("this is spy response",component.addcategoryResult.n);
      expect(component.addcategoryResult).not.toEqual(negativeData);
      
    })
    //test case for delete category method
    it("testing the delete category method",()=>{
      let data=test.response;
      spy =spyOn(service,'deleteCategory').and.returnValue(Observable.of(data));
      component.data=test.categoryData;
      component.addCategory();
      fixture.detectChanges();
      console.log("this is spy response",component.addcategoryResult.n);
      expect(component.addcategoryResult.n).toEqual(1);
      expect(component.addcategoryResult.nModified).toEqual(1);
      expect(component.addcategoryResult.ok).toEqual(1);
    })

    
  });

