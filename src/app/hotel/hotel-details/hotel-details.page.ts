import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import { Hotel} from '../hotel.model';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.page.html',
  styleUrls: ['./hotel-details.page.scss'],
})
export class HotelDetailsPage implements OnInit {
  loadedHotel: Hotel;
  constructor(
    private ActivateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.ActivateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('hid')){
        return;
      }
      const hid=paramMap.get('hid');
      this.loadedHotel=this.hotelService.getHotel(hid);
    });
  }

  onDeleteHotel(){
    this.alertCtrl.create({header: 'Are you sure',
    message:'Do you want to delete this Hotel details',
    buttons:[
      {
        text:'Cancel',
        role:'cancel'
      },
    {
      text:'Delete',
      handler:()=>{
        this.hotelService.deleteHotel(this.loadedHotel.hid);
        this.router.navigate(['/Hotel']);
      }
    }
  ]
  }).then(alertEl=>{
    alertEl.present();
  })
  }

}
