/*
  * By : Arya Anish
  * Version : 1.0
  * Date : 27 - September - 2017
*/

import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/of';

export class DataStub {  
  
  public deleteUser(): Observable<any> {
  	let data:any = {
  			ok 	: 1,
			n 	: 0
  	}
    return Observable.of(data);
  }
}