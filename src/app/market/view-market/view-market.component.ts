import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmPopupComponent } from 'src/app/confirm-popup/confirm-popup.component';
import { SnackbarService } from 'src/app/snackbar.service';
import { TransactionService } from 'src/app/transaction.service';
import { MarketFormComponent } from '../market-form/market-form.component';

@Component({
	selector: 'app-view-market',
	templateUrl: './view-market.component.html',
	styleUrls: ['./view-market.component.scss']
})
export class ViewMarketComponent implements OnInit {

	constructor(private serviceData: TransactionService,
		public dialog: MatDialog, private router: Router,
		private dialogue: MatDialog,
		private snackbar: SnackbarService

	) { }
	UserRole: any;
	marketObjects: any;

	msg:any;

	ngOnInit(): void {
		this.UserRole = this.serviceData.getNewUserType()
		this.marketObjects = this.serviceData.getAllMarkets().data
		this.msg = this.serviceData.getAllMarkets().message
	}

	openMarketCard(market: any) {
		let createMarketId = this.serviceData.getAllMarkets().data[market]['id']
		this.router.navigate([`market/${createMarketId}`])
	}

	formType=true;

	editMarket(marketID: any) {
		if(this.formType === false){
			this.formType = true
			this.dialogue.open(MarketFormComponent,{data:{marketId:marketID,formtype:this.formType}});
		}
		else{
			if(this.formType){
				this.dialogue.open(MarketFormComponent,{data:{marketId:marketID,formtype:this.formType}});
			}
		}
	}

	addMarket() {
		this.formType = false;
		this.dialogue.open(MarketFormComponent,{data:{formType:this.formType}});
	}

	deleteMarket(market: any) {
		// let response = this.serviceData.deleteMarket(market)
		// this.snackbar.failureSnackbar(response['message'])
		const dialogRef = this.dialogue.open(ConfirmPopupComponent);
	    dialogRef.afterClosed().subscribe((confirm:any)=>{
			if(confirm){
				let response = this.serviceData.deleteMarket(market)
				this.snackbar.failureSnackbar(response['message'])
			}
		})		
	}


}


