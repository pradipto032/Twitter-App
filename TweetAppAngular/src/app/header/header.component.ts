import { AuthenticationService } from './../auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: any;
  latest_date: any;

  constructor(public authServ: AuthenticationService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.date=new Date();
    this.latest_date =this.datepipe.transform(this.date, 'dd-MM-yyyy');
    // console.log(latest_date)
  }



}
