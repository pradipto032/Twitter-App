import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetuserserviceService } from '../tweetuserservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  uname = ''
  pass = ''

  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  message : any;

  constructor(private router: Router, private service:TweetuserserviceService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('Key')
  }

  public loginnow(){
    this.service.login(this.uname,this.pass).subscribe(response =>
    {
      if (response === "Successfully Logged In") {
        sessionStorage.setItem('Key', this.uname)
        this.router.navigate(['tweet'])
        this.invalidLogin = false
      }
      else {
        this.invalidLogin = true
        this.message = response
      }

    })

  }
}
