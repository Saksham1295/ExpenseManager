import { Component, OnInit } from '@angular/core';
import { CardSettingService } from './card-setting.service';
import { Router } from '@angular/router';
import * as config from '../../config/multi_en_config.json';

@Component({
  selector: 'app-card-setting',
  templateUrl: './card-setting.component.html',
  styleUrls: ['./card-setting.component.css'],
  providers: [CardSettingService]
})
export class CardSettingComponent implements OnInit {
  public word=(<any>config).cardSetting;
  values:any;

  constructor(private CardSettingService:CardSettingService) { }
  ngOnInit()
  {
    
  }


  data:any={};
  categoryData:any;
  // calling service for adding service 
  addCategory(data){
    console.log("inside method calling");
    if(this.data.category==undefined||this.data.budget==undefined||this.data.spent==undefined
      )
      alert("Fields cant be empty");
    else{
      this.CardSettingService.addCategory(this.data)
      .subscribe((res)=>console.log(res));
    }
    window.location.reload();
  }
   //  calling service for editing service
  edit(data){
    console.log(data.category+" "+data.budget+" "+data.spent);
    this.CardSettingService.editCard(data).subscribe((res)=>{this.values=res})
  } 

}

