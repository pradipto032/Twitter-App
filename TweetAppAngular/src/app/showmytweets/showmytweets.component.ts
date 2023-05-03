import { Router } from '@angular/router';
import { AuthenticationService } from './../auth/authentication.service';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmytweets',
  templateUrl: './showmytweets.component.html',
  styleUrls: ['./showmytweets.component.css']
})
export class ShowmytweetsComponent implements OnInit {

  uname: any;
  tw: any;

  constructor(private service: TweetuserserviceService, private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.uname = this.authServ.getUser();
    this.service.showmytweet(this.uname).subscribe(data => this.tw = (data));
  }

  public updateT(tid: number) {
    this.router.navigate(['tweets', this.uname, 'update', tid])
  }

  public deleteT(tid: string){
    let resp = this.service.deletetweet1(this.uname, tid);
    resp.subscribe((data) => console.log(data));
    window.location.reload();
  }
  public replyT(tid: string){
    this.router.navigate(['tweets', this.uname, 'comments', tid])
  }

}
