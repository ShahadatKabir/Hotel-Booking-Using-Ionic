import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelDetailsPageRoutingModule } from './hotel-details-routing.module';

import { HotelDetailsPage } from './hotel-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelDetailsPageRoutingModule
  ],
  declarations: [HotelDetailsPage]
})
export class HotelDetailsPageModule {}
