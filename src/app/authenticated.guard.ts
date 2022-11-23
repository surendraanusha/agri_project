import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { GetDataService } from './get-data.service';
import { TransactionService } from './transaction.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private _router:Router,private serviceData:TransactionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if(this.serviceData.getLoginStatus() != true){
      this._router.navigate(["/login"])
      return false
    }
    else{ 
      return true
    }
  }
  
  
}
