import { Component, OnInit,Input } from '@angular/core';
import {PlaidAccountsService} from './plaid-accounts.service';
import {LoginuserService} from './../../shared/loginuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plaid-accounts',
  templateUrl: './plaid-accounts.component.html',
  styleUrls: ['./plaid-accounts.component.css'],
  providers:[PlaidAccountsService]
})
export class PlaidAccountsComponent implements OnInit {


@Input() AccountDetail: any ;

  constructor(private plaidAccountsService: PlaidAccountsService,private loginUserService:LoginuserService, private router: Router) { }
  errorMsg: string;
  ngOnInit() {
  	console.log("chils component",this.AccountDetail);

  }

  addCard(){
      console.log("##################",this.loginUserService.getLoginUser());
  		let account={"email":"nishantjaiswal49@gmail.com","account_id":this.AccountDetail.account_id,"balances":this.AccountDetail.balances.current,"name":this.AccountDetail.official_name,"type":this.AccountDetail.type};
  		this.plaidAccountsService.addAccount(account)
  		.subscribe((result)=>{
  			console.log("this is result",result);
  		},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      })
	}

}
