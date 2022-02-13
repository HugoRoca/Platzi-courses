import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing: boolean = false;
  ride: Ride = DEFAULT_RIDE_OBJECT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private rideService: RideService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editing = this.id !== 'new';

    if (this.editing) {
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
  }

  save() {
    if (this.editing) {
      this.rideService.update(this.ride).subscribe(
        (data) => {
          alert('Update successfully');
          this.navCtrl.pop();
          console.log(data);
        },
        (error) => {
          alert('Wrong something happened');
          console.log(error);
        }
      );
    } else {
      this.rideService.create(this.ride).subscribe(
        (data) => {
          alert('Register successfully');
          this.navCtrl.pop();
          console.log(data);
        },
        (error) => {
          alert('Wrong something happened');
          console.log(error);
        }
      );
    }
  }
}
