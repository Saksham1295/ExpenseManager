        import { Component, OnInit } from '@angular/core';

        import {LoginuserService} from './../../shared/loginuser.service';

        import { CategoryService} from './category.service';
        import { Router } from '@angular/router';
        import swal from 'sweetalert2';

        import * as config from '../../config/multi_en_config.json';

        @Component({

            selector: 'app-categories',

            templateUrl: './categories.component.html',

            styleUrls: ['./categories.component.css'],

            providers:[CategoryService]

        })

        export class CategoriesComponent implements OnInit {

            //Declaring variables globally

            data:any={};

            categoryObjects:any=[];

            addcategoryResult:any;

            editFlag:boolean=false;

            emailInfo:any={};

            errorMsg: string;

            public word=(<any>config).categories;

            constructor(private categoryService :CategoryService,private loginUserService:LoginuserService, private router: Router) { }

            ngOnInit() {

                console.log("This is user email",this.loginUserService.getLoginUser());

                this.getCategory();

            }

            addCategory() //calling from service

            {

                this.data.email=this.loginUserService.getLoginUser();

                console.log("this is email",this.data.email);

                console.log("inside addcategory paasing",this.data);

                this.categoryService.addCategory(this.data)

                .subscribe((result)=>{

                    this.addcategoryResult=result;

                    console.log("this is response",result);

                    if(this.addcategoryResult.n==1)

                    {

                        console.log("inside if",this.addcategoryResult);

                        swal(

                                'Added!',

                                'Category Added.',

                                'success'

                                )

                        this.getCategory();         

                    }

                    else

                    {

                        console.log("inside else",this.addcategoryResult);

                            swal('Oops!',

  'Category Already Exists',

  'error')

                    }

                },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })

            }

            getCategory() //calling from service

            {

                this.categoryService.getCategory({"email":this.loginUserService.getLoginUser()})

                .subscribe((result)=>{

                    //console.log("This is get compo",result);

                    this.categoryObjects=result;

                    //console.log("This is get compo",this.categoryObjects[0].categoryName);

                },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })

            }

            deleteCategory(object) //calling from service

            {

                swal({

                    title: 'Are you sure?',

                    text: "You want to delete the Category!",

                    type: 'warning',

                    showCancelButton: true,

                    confirmButtonColor: '#283e4a',

                    cancelButtonColor: '#f16363',

                    padding: 10,

                    confirmButtonClass:null,

                    width: '390px',

                    confirmButtonText: 'Yes, delete it!'

                }).then(()=>{

                    object.email=this.loginUserService.getLoginUser();

                    console.log("hbdsbhj",object);

                    this.categoryService.deleteCategory(object)

                    .subscribe((res)=>{

                        console.log("delete response",res);

                        if(res.n!=0){

                            swal(

                                'Deleted!',

                                'Category Deleted.',

                                'success'

                                )

                            this.getCategory();

                        }               

                    },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });

                })

            }

            //update category method calling service

            updateCategory(object){

                object.email=this.loginUserService.getLoginUser();

                this.emailInfo.date=new Date();

                this.emailInfo.categoryName=object.categoryName;

                this.emailInfo.categoryId=object.categoryId;

                this.emailInfo.email=object.email;

                console.log("hbdsbhj",this.emailInfo);

                this.categoryService.updateCategory(object)

                .subscribe((res)=>{

                    console.log("delete response",res);

                    this.editFlag=!this.editFlag;

                    this.categoryService.sendEmail(this.emailInfo)

                    this.getCategory();

                },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });

            }

            //toggle method

            edit(){

                this.editFlag=!this.editFlag;

            }

        }