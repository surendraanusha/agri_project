import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../../get-data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TransactionService } from 'src/app/transaction.service';
import { SnackbarService } from 'src/app/snackbar.service';



@Component({
  selector: 'app-market-form',
  templateUrl: './market-form.component.html',
  styleUrls: ['./market-form.component.scss']
})
export class MarketFormComponent implements OnInit {


  marketForm: FormGroup;
  marketObj: object = {};

  formText: any = "Add Market Details"

  constructor(private fb: FormBuilder, private active: ActivatedRoute,
    private serviceData: TransactionService,
    private router: Router,
    private snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: { marketId: any, formtype: any },
    private dialogRef: MatDialogRef<MarketFormComponent>,
  ) {
    this.marketForm = this.fb.group({
      id: [''],
      marketName: ['', [Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]],
      marketNumber: [''],
      location: [''],
      contact: ['', [Validators.maxLength(10)]],
      description: ['']
    })
    if (data.formtype) {
      this.market_id = data.marketId,
      this.formStatus = data.formtype
    }
    else{
      this.formStatus = data.formtype
    }

  }
  market_id: any;
  formStatus: any;

  ngOnInit(): void {
    if (this.formStatus) {
      this.formText = "Edit Market Details"
      let editObj = this.serviceData.getAllMarkets().data[this.market_id]
      this.marketForm.patchValue(editObj)
    }

  }

  onConfirmClick() {
    if (this.formStatus) {
    let response = this.serviceData.editMarket(this.market_id,this.marketForm.value)
    this.snackbar.successSnackbar(response['message'])
	  this.dialogRef.close(true);
    }
    else {
      let response = this.serviceData.addNewMarket(this.marketForm.value)
      this.snackbar.successSnackbar(response['message'])
	    this.dialogRef.close(true);
    }
    
  }

}
