import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/transaction.service';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  constructor(private activate:ActivatedRoute ,
    private dialogRef: MatDialogRef<BookingFormComponent>,
    ) { 
     
    }

  ngOnInit(): void {
    
  }
  
  onConfirmClick() {
    this.dialogRef.close(true);
    
  }
}
