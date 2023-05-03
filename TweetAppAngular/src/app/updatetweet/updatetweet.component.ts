import { updateTweeting } from './../updatetwit';
import { Tweeting } from './../tweeting';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TweetuserserviceService } from '../tweetuserservice.service';

@Component({
  selector: 'app-updatetweet',
  templateUrl: './updatetweet.component.html',
  styleUrls: ['./updatetweet.component.css']
})
export class UpdatetweetComponent implements OnInit {

  tid = '';
  uname = '';
  tw: any;
  uptweet = '';
  message: any;
  // tw1 : updateTweeting = new updateTweeting("","","")
  msg = "";

  constructor(private service: TweetuserserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tid = this.route.snapshot.params['tid']
    this.uname = this.route.snapshot.params['uname']
    console.log(this.tid);
    this.service.getTweetData(this.tid).subscribe(data => this.msg = data.tweet);
  }

  public updateT(){
    this.service.getTweetData(this.tid).subscribe(data => {
      data.tid = this.tid;
      data.tweet = this.msg;
      this.service.updatetweet(this.uname, this.tid, data).subscribe(data => this.message = data);
    })
    this.router.navigate(['/tweet'])
  }

}
