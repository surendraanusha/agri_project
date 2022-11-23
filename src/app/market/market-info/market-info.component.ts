import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../../get-data.service';
import { MatDialog } from '@angular/material/dialog';

import { BookingFormComponent } from '../booking-form/booking-form.component';
import { SlotFormComponent } from '../slot-form/slot-form.component';
import { ConfirmPopupComponent } from '../../confirm-popup/confirm-popup.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TransactionService } from 'src/app/transaction.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-market-info',
  templateUrl: './market-info.component.html',
  styleUrls: ['./market-info.component.scss']
})
export class MarketInfoComponent implements OnInit {

  marketObj:any={}
  minDate=new Date()
  market_id:any;
  button_changed = false;
  userType:any;
  getNewLogginUserID:any;
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // msg="Slot deleted successfully";
  // action="Ok"
  // cancelmsg="Slot cancelled successfully";
  
  constructor(private dialogue:MatDialog,private router:Router
     ,private serviceData:TransactionService,private activated:ActivatedRoute
     ,private snackbar: SnackbarService) { }
  ngOnInit(): void {
    this.userType = this.serviceData.getNewUserType()
    this.activated.paramMap.subscribe(data=>{this.market_id = data.get("id")})
    let objId = `market_${this.market_id}`
    if(this.serviceData.getAllMarkets().data[`${objId}`] == undefined){
      this.router.navigate(['/'])
    }
    else{
      this.marketObj = this.serviceData.getMarketObj(objId)
      this.getNewLogginUserID = this.serviceData.getNewUserId()
    }
    
  }

  createSlot(){
    const dialogRef = this.dialogue.open(SlotFormComponent,{data:{idvalue:this.market_id}})
  }

  deleteSlot(marketId:any,slotdate:any){
    // let response = this.serviceData.deleteSlot(marketId,slotdate)
    // this.snackbar.successSnackbar(response['message'])
    const dialogueref = this.dialogue.open(ConfirmPopupComponent);
    dialogueref.afterClosed().subscribe((confirm:any)=>{
      if(confirm){
        let response = this.serviceData.deleteSlot(marketId,slotdate)
        this.snackbar.failureSnackbar(response['message'])
      }
    })
    
  }

  bookSlot(marketId:any,slotDate:any){ 
		const dialogRef = this.dialogue.open(BookingFormComponent)
    dialogRef.afterClosed().subscribe((confirm:any)=>{
      if(confirm){
        let response =  this.serviceData.BookSlot(marketId,slotDate)
        this.snackbar.successSnackbar(response['message'])
      }
    })
   
  }

  cancelSlot(marketID:any,slot:any){
    const dialogRef = this.dialogue.open(ConfirmPopupComponent)
    dialogRef.afterClosed().subscribe((confirm:any)=>{
      if(confirm){
        let response  = this.serviceData.cancelSlot(marketID,slot)
        this.snackbar.failureSnackbar(response['message'])
      }
    })
  }
}


