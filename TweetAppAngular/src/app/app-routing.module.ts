import { ShowallusersComponent } from './showallusers/showallusers.component';
import { DatePipe } from '@angular/common';
import { ShowmytweetsComponent } from './showmytweets/showmytweets.component';
import { ReplytweetComponent } from './replytweet/replytweet.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouteAuth } from './routeAuth/routeAuth.service';
import { Tweet1Component } from './tweet1/tweet1.component';
import { TweetuserComponent } from './tweetuser/tweetuser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { UpdatetweetComponent } from './updatetweet/updatetweet.component';
import { ShowusertweetsComponent } from './showusertweets/showusertweets.component';

const routes: Routes = [
  {path: "tweets/register", component: TweetuserComponent},
  {path: "tweets/forget", component: ForgotPasswordComponent},
  {path: "tweet", component: Tweet1Component, canActivate:[RouteAuth]},
  {path: "login", component: LoginuserComponent},
  {path: "tweets/login", component: LoginuserComponent},
  {path: "tweets/logout", component: LoginuserComponent},
  {path: "tweets/:uname/comments/:tid", component: ReplytweetComponent, canActivate:[RouteAuth]},
  {path: "tweets/:uname/update/:tid", component: UpdatetweetComponent , canActivate:[RouteAuth]},
  {path: "tweets/:uname/all", component: ShowmytweetsComponent , canActivate:[RouteAuth]},
  {path: "tweets/user/:uname", component: ShowusertweetsComponent , canActivate:[RouteAuth]},
  {path: "tweets/search", component: ShowallusersComponent , canActivate:[RouteAuth]},
  {path: "", component: LoginuserComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    DatePipe,
    Tweet1Component
  ]
})
export class AppRoutingModule { }
