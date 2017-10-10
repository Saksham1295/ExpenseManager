import { Component, OnInit,Input } from '@angular/core';
import {CardManagerService} from './card-manager.service';
import * as config from '../../config/multi_en_config.json';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css'],
  providers: [CardManagerService]
})

export class CardManagerComponent implements OnInit {

  constructor(private cardmanager: CardManagerService) { }

  ngOnInit() {
    //calling getCard method onInit
    this.getCard();
  }

  public word=(<any>config).cardManager;
  data:any={};
  cardData:any;
  email:any=localStorage.getItem('email');
  testRes:any={};

// addCard method to add credit card and calling service
  addCard(){
    this.data.Email=this.email;
    if(this.data.cardNo==undefined||this.data.holderName==undefined||
      this.data.expDate==undefined||this.data.cvv==undefined){
        alert("Fields cant be empty");
    }

    else{
      
    this.cardmanager.addCard(this.data)
    .subscribe((res)=>{
      this.testRes=res;
      });
    }
   //window.location.reload();
  }
//getCard method to get all credit cards
  getCard(){
    this.cardmanager.getData()
    .subscribe((res)=>{
      console.log(res);
      this.cardData=res;
    });
  }
}