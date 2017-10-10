import { Component, OnInit,Input } from '@angular/core';
import {CreditService} from './credit-card.service';
import * as config from '../../../config/multi_en_config.json';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
  providers:[CreditService]
})
export class CreditCardComponent implements OnInit {

  constructor(private creditservice:CreditService) { }

  ngOnInit() {
  }

  @Input('obj') obj:any;
  @Input('i') i:any;
  public word=(<any>config).creditCard;
  checkValue:boolean=false;

//toggle button
  toggle(value:any)
  {
    this.checkValue=!this.checkValue;
    let active={'flag':this.checkValue,'Email':localStorage.getItem('email'),'cardNo':value};
    this.creditservice.toggle(active)
    .subscribe((res)=>{
      this.obj.flag=res.flag;
      // this.val=res.flag;
    });
  }
}
