import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
private hotels: Hotel[]=[
  {
    hid:'H1234',
    hname:'Hotel Jalandar',
    himageUrl:'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/21/27/2127156_v2.jpeg',
    hrtype:['Single Room','Delux Room','Super Delux'],
    hrating:[[1,2,3],'3 Stars',3],
    haddress:['Ronak chawk','Jalandar','939847309','contact.ramanda@gmail.com']
  },
  {
    hid:'H12345',
    hname:'Hotel Amritsar',
    // eslint-disable-next-line max-len
    himageUrl:'https://www.katarahospitality.com/wp-content/uploads/2016/03/antoniopistillo.com_14NovembreKataraHospitality_AAA4175-Edit-710x299.jpg',
    hrtype:['Single Room','Delux Room'],
    hrating:[[1,2,3,4,5],'5 Stars',5],
    haddress:['Guru Road','Amritsar','7209856778','contact.amritsaria@gmail.com']
  },
  {
    hid:'H123456',
    hname:'Hotel Radisson',
    himageUrl:'https://www.ahstatic.com/photos/7484_ho_00_p_1024x768.jpg',
    hrtype:['Single Room','Delux Room','Super Delux','Suite'],
    hrating:[[1,2,3,4,5,6,7],'7 Stars',7],
    haddress:['Jamia road','Delhi','98372627261','contact.raddison@gmail.com']
  }
];
  constructor() { }
  getAllHotels() {
    return [...this.hotels];
    }
  getHotel(hid: string){
  return {
  ...this.hotels.find(hotel=> hotel.hid===hid)
  };
    }
  deleteHotel(hid: string){
    this.hotels=this.hotels.filter(hotel=>hotel.hid !== hid);
  }
}
