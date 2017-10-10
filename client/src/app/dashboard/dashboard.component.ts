import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit ,Attribute} from '@angular/core';
import { JQueryStatic} from 'jquery';
import { Router } from '@angular/router';
import * as config from '../config/multi_en_config.json';
declare var $:JQueryStatic;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
private date;
public word=(<any>config).dashboard;
  constructor(private router:Router,@Attribute("date")format ) {
  setInterval(()=>{
    this.date=new Date();
  },1000);
   }

  ngOnInit() {
    
  }
  // sign out function for logged in user
  signout(){
    localStorage.removeItem('email');
    // navigating to welcome page
    this.router.navigate(['/welcome']);
  }

}
