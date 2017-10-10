import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {CardManagerComponent} from './dashboard/card-manager/card-manager.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { DashboardDataComponent } from './dashboard/dashboard-data/dashboard-data.component';
import { AuthguardGuard } from './shared/authguard.guard'; 
import { UserService } from './shared/user-service';
import { UserSignedOut } from './shared/user-signout';
import { AuthGuard } from './shared/auth.guard'; 
import { DeleteUserComponent } from './dashboard/delete-user/delete-user.component'; 
import {PlaidComponent} from './dashboard/plaid/plaid.component';
import {PlaidAccountsComponent} from './dashboard/plaid-accounts/plaid-accounts.component';
import { ReportComponent } from './dashboard/report/report.component';
import { MailerService} from './shared/mailer.service';
import { MailverificationComponent} from './mailverification/mailverification.component';
import { CardSettingComponent } from './dashboard/card-setting/card-setting.component';
import {DisplayPlaidAccountComponent} from './dashboard/display-plaid-account/display-plaid-account.component'
import { AccountComponent } from './dashboard/account/account.component';
import {MiddlewareComponent} from './middleware/middleware.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import {LoginuserService} from './shared/loginuser.service';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import {AddCategoryComponent}  from './dashboard/add-category/add-category.component';
import {ResetPasswordComponent} from './dashboard/reset-password/reset-password.component';
import {SetPasswordComponent} from './set-password/set-password.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { AddTransactionComponent } from './dashboard/add-transaction/add-transaction.component';
import { UploadDownloadComponent } from './dashboard/upload-download/upload-download.component';
import { UploadDownloadService } from './dashboard/upload-download/upload-download.service';

    const routes: Routes = [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
       {path:'register',component:RegisterComponent},
       {path:'verify', component:MailverificationComponent},
       {path:'middleware', component:MiddlewareComponent},
       {path:'dashboard',component:DashboardComponent,
        /*canActivate: [AuthguardGuard],*/
       children:[
       {path: '', redirectTo: 'charts', pathMatch: 'full' },
       {path:'charts',component:DashboardDataComponent},
       {path:'report',component:ReportComponent},
       {path:'reset',component:ResetPasswordComponent},
       {path:'upload',component:UploadDownloadComponent},
       {path:'categorymanager',component:CardSettingComponent},
       {path:'Account',component:AccountComponent},
       {path:'delete',component:DeleteUserComponent},
       {path:"cardmanager", component: CardManagerComponent}, 
       {path:'categories',component:CategoriesComponent},
       {path:'addcategory',component:AddCategoryComponent},
        {path:'transaction',component:TransactionComponent},
        {path:'addtransaction',component:AddTransactionComponent},
        {path:'plaidaccount',component:PlaidComponent},
        {path:'displayplaidaccount',component:DisplayPlaidAccountComponent}

       ]
   },
      
       /*, canActivate: [AuthguardGuard]},*/
       {path:'login',component:LoginComponent},
       {path:'forgetpass',component:ForgetPassComponent},
       {path:'setpassword', component:SetPasswordComponent},

       {path:'error/:id',component:ErrorhandlingComponent}, 
       {path:'welcome',component:WelcomeComponent
       /*canActivate: [AuthGuard]*/}
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ],
      providers: [UserService,UploadDownloadService,AuthguardGuard, AuthGuard,UserSignedOut,MailerService,LoginuserService]
    })
    export class AppRoutingModule {}