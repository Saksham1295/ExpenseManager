import { Component, OnInit ,Input } from '@angular/core';
import {AddCategoryService} from './add-category.service';
import * as config from '../../config/multi_en_config.json';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
   providers: [AddCategoryService]
})
export class AddCategoryComponent implements OnInit {


  constructor(private AddCategoryService:AddCategoryService) { }

  ngOnInit() {}

  @Input('obj') obj:any;
  @Input('i') i:any;
  
  public word = (<any>config).addCategory;
  category:any={};

  // The following delete() function will delete the saved card of users
  delete(data){  
    console.log("Data in category",this.category);
    this.AddCategoryService.deleteCard(data)
     .subscribe((res)=>{console.log("response from server",res);
    alert("Your account has been deleted");
    console.log("abc");
    return <any>res} );   
  }
}
