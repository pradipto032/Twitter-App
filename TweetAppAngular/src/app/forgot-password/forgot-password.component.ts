import { User } from './../user';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  uname1 = ''
  newPassword = ''
  confirmPassword = ''
  message = ''
  invalidLogin = false

  constructor(private service: TweetuserserviceService, private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUser(this.uname1)
  }

  forgetPassword() {
    if(this.newPassword === this.confirmPassword)
    {
      this.service.getUser(this.uname1).subscribe(data => {
        console.log(typeof(data))
        data.password = this.newPassword
        this.service.forgetpass(this.uname1, data).subscribe(data1 => console.log(data1))
      })
      this.router.navigate(['tweets/login'])
    }
    else
    {
      this.invalidLogin = true
      this.message = "Password not matching"
    }
  }

}
