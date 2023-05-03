import { liketweet } from './../liketweet';
import { Tweeting } from './../tweeting';
import { Component, OnInit } from '@angular/core';
import { TweetuserserviceService } from '../tweetuserservice.service';
import { AuthenticationService } from '../auth/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tweet1',
  templateUrl: './tweet1.component.html',
  styleUrls: ['./tweet1.component.css']
})
export class Tweet1Component implements OnInit {

  tw1: Tweeting = new Tweeting("","");
  liket: liketweet = new liketweet("","");
  public tw : any;
  tweet="";
  tag ="";
  message = "";
  message1: any;
  uname: any;
  uname1: any;
  tid = "";
  usernameisthere=false
  warnmsg = "";
  like1: any;
  like: any;
  tweetid="";
  tweetlike: any[] = [];
  liketwe: any;
  lik: any;

  constructor(private service:TweetuserserviceService, private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this.uname1 = this.authServ.getUser();
    this.tw1.uname = this.uname1;
    let resp = this.service.getAlltweets();
    resp.subscribe(data => {
      this.tw = data
      for(let a of this.tw)
      {
        this.service.getLikes(a.tid).subscribe(data1 => {
          this.liketwe = {
            "likescount" : data1.toString(),
            "tweetid" : a.tid
          }
          this.tweetlike.push(this.liketwe);
        });
      }
      this.lik = this.tweetlike;
    });

  }

  public tweetingtweet(){
    this.tw1.tweet = this.tweet+" "+this.tag;
    if(this.tweet == ''){
      this.warnmsg = "Please write something before sharing"
    }
    else{
    let resp = this.service.sharetweet(this.tw1);
    resp.subscribe((data) => this.message=data.toString());
    window.location.reload();
    }
  }

  public logout(){
    this.authServ.logout();
  }

  public deletetweet(tid: string){
    let resp = this.service.deletetweet1(this.uname1, tid);
    resp.subscribe((data) => console.log(data));
    window.location.reload();
  }

  public replyT(tid: String) {
      this.router.navigate(['tweets', this.uname1, 'comments', tid])
  }

  public updateT(tid: String) {
      this.router.navigate(['tweets', this.uname1, 'update', tid])
  }

  public dlikes(tid: string){
    this.liket.lname = this.uname1;
    this.liket.tid = tid;
    console.log(this.uname1, tid);
    this.service.doLikes(this.uname1, tid, this.liket).subscribe(data => console.log(data));
    window.location.reload();
  }


}
