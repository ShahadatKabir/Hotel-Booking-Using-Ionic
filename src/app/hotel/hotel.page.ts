/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.model';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
hotels: Hotel[];
  constructor(private HotelService: HotelService) { }

  ngOnInit() {
    this.hotels=this.HotelService.getAllHotels();
  }

}
