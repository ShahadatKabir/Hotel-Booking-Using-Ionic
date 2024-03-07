import {TestBed } from '@angular/core/testing';
import { HotelService } from './hotel.service';

describe('HotelPage', () => {
  let service: HotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
