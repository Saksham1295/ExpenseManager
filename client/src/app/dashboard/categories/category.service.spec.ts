
/*name :nishant ,anurag
date:27-9-17
version: 1.0
*/
import { TestBed, inject } from '@angular/core/testing';
import {Http,Response} from '@angular/http';
import { CategoryService } from './category.service';
import {HttpModule} from '@angular/http';
import {async ,ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {BaseRequestOptions,XHRBackend,ResponseOptions,RequestMethod} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import * as configTest from './categories.test.config.json';
// test suite begin here
describe('CategoryService', () => {
	 let test=(<any>configTest).categories;
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports:[HttpModule],
      providers:[{provide:"http://localhost:8080/category/addcategory",useValue:'http://example.com'}
      ,CategoryService,
      {provide:XHRBackend,useClass:MockBackend}]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
  //test case for adding category
  describe('sending category name for storing in database',()=>{
  	it('should add category to database',
  		inject([CategoryService,XHRBackend],(categoryService,mockBackend)=>{
  				const mockResponse=test.response;
  				mockBackend.connections.subscribe((connection)=>{
  					connection.mockRespond(new Response(new ResponseOptions({
  						body:JSON.stringify(mockResponse)

  					})))

  				});

  				categoryService.addCategory(test.email)
  				.subscribe((result)=>{
  					expect(result.n).toEqual(1);
  					expect(result.ok).toEqual(1);
  					expect(result.nModified).toEqual(1);
  				})

  		})
  		)
  	//negative test case for adding category
  	it('should give negative category response to database',
  		inject([CategoryService,XHRBackend],(categoryService,mockBackend)=>{
  				const mockResponse=test.data
  				mockBackend.connections.subscribe((connection)=>{
  					connection.mockRespond(new Response(new ResponseOptions({
  						body:JSON.stringify(mockResponse)
  					})))
  					
  				});
  				categoryService.addCategory(test.email)
  				.subscribe((result)=>{
  					 expect(result.response).toEqual("category already exixts");
  					
  				})

  		})
  		)



  })
  // test case for getting category
  describe('getCategory()',()=>{
            it('should return an Observables<Array<Category>>',inject([CategoryService,XHRBackend],(categoryService,mockBackend)=>{
                const mockResponse=test.category;
                mockBackend.connections.subscribe((connection)=>{
              expect(connection.request.method).toBe(RequestMethod.Post);
                connection.mockRespond(new Response(new ResponseOptions({
                        body:JSON.stringify(mockResponse)

                    })));
                });
                categoryService.getCategory().subscribe((mockCategory)=>{
                    expect(mockCategory.length).toBe(1);
                    expect(mockCategory[0].categoryId).toEqual('1');
                    expect(mockCategory[0].categoryName).toEqual('Home');

                });
                }));
          })

// test case for delete category
  describe('deleteCategory()', () => {
        beforeEach(() => {

            TestBed.configureTestingModule({
                imports: [HttpModule],
                providers: [CategoryService,{ provide: XHRBackend, useClass: MockBackend }]
            });
        });
        it('should return an Observable<Array<Buiding>>',
            inject([CategoryService, XHRBackend], (categoryService, mockBackend) => {
                const mockResponse =test.response;
                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });
                categoryService.deleteCategory().subscribe((mockDelete) => {
                    expect(mockDelete.ok).toEqual(1);
                    expect(mockDelete.nModified).toEqual(1);
                    expect(mockDelete.n).toEqual(1);
                });
            }));
        it('should return an Observable<Array<Buiding>>',
            inject([CategoryService, XHRBackend], (categoryService, mockBackend) => {
                const mockResponse =test.negativeResponse;
               // [{ "ok": "0","nModified": "0","n": "0"}];
                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                categoryService.deleteCategory().subscribe((mockDelete) => {
                    expect(mockDelete.ok).not.toEqual(1);
                    expect(mockDelete.nModified).not.toEqual(1);
                    expect(mockDelete.n).not.toEqual(1);
                });

            }));
        

    })
});
