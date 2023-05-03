import { Router } from '@angular/router';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showallusers',
  templateUrl: './showallusers.component.html',
  styleUrls: ['./showallusers.component.css']
})
export class ShowallusersComponent implements OnInit {

  us: any;
  str = "";

  constructor(private service: TweetuserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(data => this.us = data);
  }

  public searchbyusername(){
    this.service.showalluser(this.str).subscribe(data => this.us = data);
  }

  public gotouser(uname: string){
    console.log(uname);
    this.router.navigate(['tweets/user', uname])
  }
}
