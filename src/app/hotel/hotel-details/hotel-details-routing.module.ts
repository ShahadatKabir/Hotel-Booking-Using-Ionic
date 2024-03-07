import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDetailsPage } from './hotel-details.page';

const routes: Routes = [
  {
    path: '',
    component: HotelDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelDetailsPageRoutingModule {}
