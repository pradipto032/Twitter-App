import { Router } from '@angular/router';
import { TweetuserserviceService } from './../tweetuserservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tweetuser',
  templateUrl: './tweetuser.component.html',
  styleUrls: ['./tweetuser.component.css']
})
export class TweetuserComponent implements OnInit {

  user: User=new User("","","","","","");
  message: any;
  warnmsg = "";
  cpassword = "";

  constructor(private service:TweetuserserviceService, private router: Router) { }

  ngOnInit() {
  }

  public registernow(){
    let regexpNumber = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexpNumber1 = new RegExp('^[0-9]{10}$');
    // console.log(this.user.email)
    if(this.user.firstName == "" || this.user.uname == "" || this.user.lastName == "" || this.user.password == "" || this.user.contactNumber == "" || this.user.email == "")
    {
      this.message = "Please fill all the fields";
    }
    else if(this.user.password != this.cpassword)
    {
      this.message = "Password is mismatching"
    }
    else if(!regexpNumber.test(this.user.email))
    {
      // console.log(this.user.email)
      this.message = "Email not provided correctly"
    }
    else if(!regexpNumber1.test(this.user.contactNumber))
    {
      this.message = "Contact not provided correctly"
    }
    else{
      let response = this.service.doRegistration(this.user);
      response.subscribe((data) => {
        this.message=data
        if(this.message == "User registered"){
          this.message="You registered click on the login below and happy Tweeting!!!"
        }
      });
    }
  }


}
