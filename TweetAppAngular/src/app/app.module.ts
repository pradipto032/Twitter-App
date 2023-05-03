import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tweet1Component } from './tweet1/tweet1.component';
import { TweetuserComponent } from './tweetuser/tweetuser.component';
import {HttpClientModule} from '@angular/common/http';
import { TweetuserserviceService } from './tweetuserservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReplytweetComponent } from './replytweet/replytweet.component';
import { UpdatetweetComponent } from './updatetweet/updatetweet.component';
import { HeaderComponent } from './header/header.component';
import { ShowmytweetsComponent } from './showmytweets/showmytweets.component';
import { ShowallusersComponent } from './showallusers/showallusers.component';
import { ShowusertweetsComponent } from './showusertweets/showusertweets.component';

@NgModule({
  declarations: [
    AppComponent,
    Tweet1Component,
    TweetuserComponent,
    LoginuserComponent,
    ForgotPasswordComponent,
    ReplytweetComponent,
    UpdatetweetComponent,
    HeaderComponent,
    ShowmytweetsComponent,
    ShowallusersComponent,
    ShowusertweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [TweetuserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
