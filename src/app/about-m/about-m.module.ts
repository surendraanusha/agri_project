import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path:'',component:AboutComponent,},
 ];

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class AboutMModule { }
