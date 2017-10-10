import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import{ ReportComponent } from './dashboard/report/report.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { CardManagerComponent} from './dashboard/card-manager/card-manager.component';
import { CardSettingComponent} from './dashboard/card-setting/card-setting.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { DashboardDataComponent } from './dashboard/dashboard-data/dashboard-data.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {PlaidComponent} from './dashboard/plaid/plaid.component';
import {PlaidAccountsComponent} from './dashboard/plaid-accounts/plaid-accounts.component';
import { PlaidService } from './dashboard/plaid/plaid.service';
import { PlaidAccountsService } from './dashboard/plaid-accounts/plaid-accounts.service';
import { AuthguardGuard } from './shared/authguard.guard';
import { DeleteUserComponent } from './dashboard/delete-user/delete-user.component';
import { MailverificationComponent } from './mailverification/mailverification.component';
import { AccountComponent } from './dashboard/account/account.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { ForgetPassComponent} from './forget-pass/forget-pass.component';
import { CreditCardComponent } from './dashboard/card-manager/credit-card/credit-card.component';
import { AddCategoryComponent } from './dashboard/add-category/add-category.component';
import { MailotpService} from './shared/mailotp.service';
import { RegisterService } from './shared/register.service';
import { MailerService } from './shared/mailer.service';
import { GetJSONService} from './shared/get-json.service';
import {ResetPasswordComponent} from './dashboard/reset-password/reset-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { AddTransactionComponent } from './dashboard/add-transaction/add-transaction.component';
import {LoginuserService} from './shared/loginuser.service';
import { UploadDownloadComponent } from './dashboard/upload-download/upload-download.component';
import { UploadDownloadService } from './dashboard/upload-download/upload-download.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DisplayPlaidAccountComponent} from './dashboard/display-plaid-account/display-plaid-account.component';
import {DisplayPlaidAccountService} from './dashboard/display-plaid-account/display-plaid-account.service';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
@NgModule({
  declarations: [
    AppComponent,PlaidComponent,PlaidAccountsComponent,
    CategoriesComponent,DashboardComponent,UploadDownloadComponent,
    RegisterComponent,LoginComponent,CardManagerComponent,CardSettingComponent,AccountComponent,
    WelcomeComponent, DashboardDataComponent,ReportComponent,  CreditCardComponent,DeleteUserComponent,
     MailverificationComponent,DisplayPlaidAccountComponent,
    MiddlewareComponent,ForgetPassComponent, AddCategoryComponent,
      ResetPasswordComponent,SetPasswordComponent, TransactionComponent, AddTransactionComponent, ErrorhandlingComponent
     ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpModule,ChartsModule,BrowserAnimationsModule,PasswordModule,InputTextModule,CalendarModule
  ],
  providers: [AuthguardGuard,CookieService,MailotpService,PlaidService,PlaidAccountsService,UploadDownloadService, RegisterService, MailerService,GetJSONService,LoginuserService,DisplayPlaidAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
