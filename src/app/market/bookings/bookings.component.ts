import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmPopupComponent } from 'src/app/confirm-popup/confirm-popup.component';
import { SnackbarService } from 'src/app/snackbar.service';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})


export class BookingsComponent implements OnInit {

  constructor(private serviceData:TransactionService,
              private router:Router,private snackbar: SnackbarService
              ,private dialogue:MatDialog) {

               }

  bookedArray:any=[];
  message:any;

  date:any;
  ngOnInit(): void {
    if(this.serviceData.getNewUserType() == 'admin'){
      this.snackbar.failureSnackbar("this page is not access for admins") 
      this.router.navigate(['/'])
    }
    else{
      let response =  this.serviceData.getAllBookings()
      this.bookedArray = response['data']
      this.snackbar.successSnackbar(response['message'])
      // this.serviceData.getTodayBookings()
    }
  }

  
  cancelSlot(rmarket_Id:any,slotDate:any){
    const dialogueref = this.dialogue.open(ConfirmPopupComponent)
    dialogueref.afterClosed().subscribe((confirm:any)=>{
      if(confirm){
        let response = this.serviceData.cancelSlot(rmarket_Id,slotDate)
        this.snackbar.failureSnackbar(response['message'])
      }
    })
  }

  Apply(myDatePicker:any){
    let date = new Date(myDatePicker._model['selection']).getDate();
		let month = new Date(myDatePicker._model['selection']).getMonth() + 1;
		let year = new Date(myDatePicker._model['selection']).getFullYear();
		let fullDate = `${date}-${month}-${year}`;
    let response = this.serviceData.getTodayBookings(fullDate)
    if(response['status']==='success'){
      this.snackbar.successSnackbar(response['message'])
    }
    else{
      this.snackbar.failureSnackbar(response['message'])
    }
    
   
  }
}
