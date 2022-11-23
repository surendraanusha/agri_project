import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/transaction.service';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private serviceData:TransactionService) { }
  changeButton:any;
  ngOnInit(): void {
    // this.changeButton = this.serviceData.isLoggedIn
    // console.log("isLoggedIn=======>",this.serviceData.isLoggedIn)
  }

  signOut(){
    this.serviceData.resetLoginStatus()
  }


}
