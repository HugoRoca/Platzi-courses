import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from 'src/models/ride';
import { RideService } from '../../services/ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.page.html',
  styleUrls: ['./rides.page.scss'],
})
export class RidesPage implements OnInit {
  rides: Observable<[Ride]>;
  constructor(private rideService: RideService) {}

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this.rides = this.rideService.getAll();
  }

  delete(id) {
    this.rideService.delete(id).subscribe(
      (data) => {
        alert('Delete successfully');
        this.getRides();
      },
      (err) => {
        alert('Something wrong happened');
        console.log(err);
      }
    );
  }
}
