import { AuthenticationService } from './../auth/authentication.service';
import { Tweet1Component } from './../tweet1/tweet1.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showusertweets',
  templateUrl: './showusertweets.component.html',
  styleUrls: ['./showusertweets.component.css']
})
export class ShowusertweetsComponent implements OnInit {

  uname = "";
  tw : any;
  us : any;

  constructor(private service: TweetuserserviceService, private route: ActivatedRoute, private router: Router, private authServ: AuthenticationService) { }

  ngOnInit(): void {
    this.uname = this.route.snapshot.params['uname'];
    if(this.uname == this.authServ.getUser())
    {
      this.router.navigate(['tweets',this.uname,'all']);
    }
    else
    {
      this.service.showmytweet(this.uname).subscribe(data => this.tw = data);
      this.service.getUser(this.uname).subscribe(data1 => this.us = data1);
    }
  }

  public replyT(tid: String) {
    this.router.navigate(['tweets', this.uname, 'comments', tid])
}

}
