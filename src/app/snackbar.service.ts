
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbarRef: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
	verticalPosition: MatSnackBarVerticalPosition = 'top';

  action:any

  successSnackbar(message: any) {
   return  this.snackbarRef.open(message,this.action,
    { duration:2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition:this.verticalPosition,
        panelClass: ['successMessage']
      })
  }
  
  failureSnackbar(message:any){
    return  this.snackbarRef.open(message,this.action,
      { duration:2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition:this.verticalPosition,
        panelClass: ['dangerMessage']
      })
  }

}
