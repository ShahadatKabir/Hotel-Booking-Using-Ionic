import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{     path: '', redirectTo: 'hotel', pathMatch: 'full'   },
  {     path: 'hotel',
        children: [
          {
            path:'',
            loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
          },
          {
            path:':hid',
            loadChildren: () => import('./hotel/hotel-details/hotel-details.module').then( m => m.HotelDetailsPageModule)
          }
        ]
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
