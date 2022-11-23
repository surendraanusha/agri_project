import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMarketComponent } from './view-market/view-market.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MarketInfoComponent } from './market-info/market-info.component';
import { MarketFormComponent } from './market-form/market-form.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthenticatedGuard } from '../authenticated.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { SlotFormComponent } from './slot-form/slot-form.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  {path:'',component:ViewMarketComponent},
  {path:'market/:id',component:MarketInfoComponent,canActivate:[AuthenticatedGuard]},
  {path:'add-market',component:MarketFormComponent},
  {path:'edit-market/:id',component:MarketFormComponent},
  {path:'bookings',component:BookingsComponent,canActivate:[AuthenticatedGuard]}

  
 ];
@NgModule({
  declarations: [
    ViewMarketComponent,
    MarketInfoComponent,
    MarketFormComponent,
    SlotFormComponent,
    ConfirmPopupComponent,
    BookingFormComponent,
    BookingsComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    [RouterModule.forChild(routes)]
  ]
})
export class MarketModule { }
