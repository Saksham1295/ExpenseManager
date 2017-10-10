import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadDownloadService {

  constructor(private http : Http) { }

	convertUpload(formData:FormData, email : any): Observable<any> {
	  	console.log("this is from convert user service ", email);
	    return this.http.post('http://localhost:8080/upload/' + email,formData).map( response =>
	    response.json(),
	    (error:any)=>{
	    error.json();
	    });
	  }

}
