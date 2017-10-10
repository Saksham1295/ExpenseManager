import { Component, OnInit, ElementRef } from '@angular/core';
import {UploadDownloadService } from './upload-download.service';
import {LoginuserService} from './../../shared/loginuser.service';
import * as config from '../../config/multi_en_config.json';

@Component({
  selector: 'app-upload-download',
  templateUrl: './upload-download.component.html',
  styleUrls: ['./upload-download.component.css'],
  providers:[UploadDownloadService]
})

export class UploadDownloadComponent implements OnInit {
	email : any;
  	constructor(private uploadService: UploadDownloadService , private el: ElementRef,private loginUserService:LoginuserService) { }


  ngOnInit() {
	this.email = this.loginUserService.getLoginUser();  	
  	console.log("This is user email",this.loginUserService.getLoginUser());
  }

  	responseMessage : any;
  	fileName : any;
  	public word= (<any>config).upload;

	userUpload() {
  		console.log(this.email + " This is from upload-download component");
	    //locate the file element meant for the file upload.
	    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file');
	    //get the total amount of files attached to the file input.
	    let fileCount: number = inputEl.files.length;
	    //create a new fromdata instance
	    let formData = new FormData();
	    //check if the filecount is greater than zero, to be sure a file was selected.
	    if(fileCount > 0)
	    {
	      // a file was selected
	      //append the key name 'photo' with the first file in the element
	      formData.append('file', inputEl.files.item(0));
	      this.uploadService.convertUpload(formData, this.email).subscribe((response) => {
	        console.log(response);
	        this.responseMessage = response.message;
	        this.fileName = response.filename; 
	        console.log( response.filename);   
	      });
	  	}
	  }

}
