import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { TransactionService } from 'src/app/transaction.service';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails:any;
  errorMsg=false;
  constructor(private _formBuilder:FormBuilder,
    private router:Router,private serviceData:TransactionService,
	private snackbarRef: MatSnackBar,
  	private snackbar: SnackbarService
	) {
		
	 }
    
    buttonText:any;
    changeButton:any
   
    signOut(){
      this.changeButton = true
      localStorage.removeItem('userName')
      localStorage.removeItem('password')
      localStorage.removeItem('role');
      this.router.navigate(['/login'])
     
    }
	ngOnInit(): void {
		if(localStorage.getItem('userName') != null){
		this.changeButton = true;
		this.router.navigate(['/'])
		}
		this.userDetails = this._formBuilder.group({
			id :[''],
		username : [''],
		password : ['',[Validators.maxLength(10)]],
		confirmPassword: [''],
		role:['']
		})
	}

	loginUser(){
		// console.log("getting user details========>",this.userDetails.value.username)
		let response = this.serviceData.login(this.userDetails.value)
		if(response.status=='success'){
			this.snackbar.successSnackbar(response['message'])
		}else{
			this.snackbar.failureSnackbar(response['message'])
		}
	}
  
	signUpUser(){
		let response  = this.serviceData.signup(this.userDetails.value)
		if(response.status=='success'){
			this.snackbar.successSnackbar(response['message'])
			this.SignIn()
			}
			else{
				this.snackbar.failureSnackbar(response['message'])
			}
	}

	toggling = false;

	SignUp(){
		if(this.toggling == true){
			this.toggling = !this.toggling
		}
		else{
			this.toggling
		}
	}
	SignIn(){
		if(this.toggling == false){
			this.toggling = !this.toggling
		}
		else{
			this.toggling
		}
	}

}

