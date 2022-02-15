import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  id: string;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  constructor(
    private rideService: RideService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rideService.getById(this.id).subscribe(
      (data: Ride) => {
        this.ride = data;
        console.log(data);
      },
      (error) => {
        alert('Wrong something happened');
        console.log(error);
      }
    );
  }

  delete() {
    this.rideService.delete(this.ride.id).subscribe(
      (data) => {
        alert('Delete successfully');
        this.navCtrl.pop();
      },
      (err) => {
        alert('Something wrong happened');
        console.log(err);
      }
    );
  }
}
