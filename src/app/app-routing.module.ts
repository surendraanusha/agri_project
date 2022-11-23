import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  loadChildren:() => import('./market/market.module').
  then(m=>m.MarketModule)},
  
  {path:'login',
  loadChildren:() => import('./authentication/authentication.module').
  then(m=>m.AuthenticationModule)},
  {path:'about',loadChildren:() => import('./about-m/about-m.module').
  then(m=>m.AboutMModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
