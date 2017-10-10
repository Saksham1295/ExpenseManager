/*
	* Modified version by : Arya Anish
	* modified version date : 28 - September - 2017
	*/

	import { Component ,OnInit} from '@angular/core';
	import { Router } from '@angular/router';
	import * as config from '../../config/multi_en_config.json';
	import { DeleteUserService } from './delete-user.service';

	@Component({
		selector: 'app-delete-user',
		templateUrl: './delete-user.component.html',
		styleUrls: ['./delete-user.component.css'],
		providers: [DeleteUserService]
	})
	export class DeleteUserComponent  {
		/* Declaring the global variables */
		email:any;
		password:any;
		public word= (<any>config).deleteUser;
		messageData : any;
		errorMsg: string;
		constructor(private deleteUserService:DeleteUserService, private router:Router) { }
		/* Calling method from Service */
		delete()
		{	
			let data={'Password':this.password,'Email':this.email};		//Initializing the variable
			this.deleteUserService.deleteUser(data)
			.subscribe((res)=> {
				this.messageData = res.ok;
				localStorage.removeItem('key');	
				this.router.navigateByUrl('/login');		//routing to another view via routing
			},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
       });

		}
	}
