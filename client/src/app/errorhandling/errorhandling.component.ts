import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.css']
})
export class ErrorhandlingComponent implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute) {}
public error_name :any

  ngOnInit() {

  	this.activatedRoute.params.subscribe((params: Params) => {
        this.error_name = params['id'];
        console.log(this.error_name);
      });
  }


}
