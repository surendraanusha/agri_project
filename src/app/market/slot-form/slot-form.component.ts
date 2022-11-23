import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TransactionService } from 'src/app/transaction.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
	selector: 'app-slot-form',
	templateUrl: './slot-form.component.html',
	styleUrls: ['./slot-form.component.scss']
})
export class SlotFormComponent implements OnInit {

	market_id: any;
	constructor(private activated: ActivatedRoute,
		private dialogRef: MatDialogRef<SlotFormComponent>,
		private serviceData: TransactionService,
		@Inject(MAT_DIALOG_DATA) public data: { idvalue: any },
		private snackbarRef: MatSnackBar,
		private snackbar: SnackbarService
	) {
		this.market_id = `market_${data.idvalue}`
	}
	mindate = new Date();

	ngOnInit(): void {

	}
	horizontalPosition: MatSnackBarHorizontalPosition = 'end';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';


	onConfirmClick(myDatePicker: any) {
		let date = new Date(myDatePicker._model['selection']).getDate();
		let month = new Date(myDatePicker._model['selection']).getMonth() + 1;
		let year = new Date(myDatePicker._model['selection']).getFullYear();
		let fullDate = `${date}-${month}-${year}`;

		let response = this.serviceData.createSlot(this.market_id, fullDate)
		this.snackbar.successSnackbar(response['message'])
		this.dialogRef.close(true);
	}

}


