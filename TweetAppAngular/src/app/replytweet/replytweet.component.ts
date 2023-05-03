import { Router, ActivatedRoute } from '@angular/router';
import { ReplyTweet } from './../replytweet';
import { AuthenticationService } from './../auth/authentication.service';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replytweet',
  templateUrl: './replytweet.component.html',
  styleUrls: ['./replytweet.component.css']
})
export class ReplytweetComponent implements OnInit {

  re: ReplyTweet = new ReplyTweet("","","");
  reply = '';
  rep : any;
  rname : any;
  tid = '';
  message : any;
  showmessage : any;
  tweet1 : any;
  uname : any;

  constructor(private service: TweetuserserviceService, private authServ: AuthenticationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.rname = this.authServ.getUser();
    this.re.rname = this.rname;
    this.tid = this.route.snapshot.params['tid']
    this.re.tid = this.tid;
    this.service.getTweetData(this.tid).subscribe(data1 => {
      this.tweet1 = data1.tweet,
      this.uname = data1.uname
    })

    this.service.showreply(this.tid).subscribe(data => {
      if(data === null)
      {
        this.showmessage = "No replies yet"
      }
      else{
        this.rep = data;
      }
    })
  }

  public replytweet1(){
    this.re.reply = this.reply;
    if(this.reply === '')
    {
      this.message = "Please write something to reply"
    }
    else{
      this.service.replytweet(this.rname, this.tid, this.re).subscribe(data => console.log(data))
      window.location.reload();
    }
  }

}
