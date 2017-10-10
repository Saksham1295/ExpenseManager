/*importing the dependency*/
import * as config from '../config/multi_en_config.json';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { slideInOutAnimation} from '../animations/slideInOut';
/*import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
*//*importing MailOtp service*/
import { MailotpService} from '../shared/mailotp.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[slideInOutAnimation],
  host:{'[@slideInOutAnimation]':''},
  
})
export class RegisterComponent{
  /*declaration of variable*/
data:any={};
info:any={};
2
  public word = (<any>config).register;
errorMsg:string;
  constructor(private registerUser:RegisterService,
  private mailotp:MailotpService, private router:Router
    ) { }
register()
/*validate data*/
{
  if(this.data.fullName===undefined || this.data.email===undefined ||
    this.data.password===undefined || this.data.confirmPassword===undefined || 
    this.data.contact===undefined ){
    alert("Fields cant be empty");
  }
else{
    if(this.data.password===this.data.confirmPassword)
{
this.registerUser.tempUser(this.data);
this.mailotp.sendMailOTP(this.data.email, "Email Verification", "login")
/*error Handling*/
.subscribe((dataError)=>{this.errorMsg=dataError},(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });
  /*On submission ,redirected to verify page*/
  this.router.navigateByUrl('/verify');
}
else{
  alert("Password didn't matched");/*Give an alert!!if password donot match*/
  
}
}

}

}
