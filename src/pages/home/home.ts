import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Flashlight } from 'ionic-native';

import { DBMeter } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  private subscription; 

  onChange(e) {

    console.log(e)

    if(e.checked) {
      console.log('Start');
      this.subscription = DBMeter.start().subscribe(
        data => {
          console.log(data)

          if(data > 70) {
            Flashlight.switchOn();
          } else {
            Flashlight.switchOff();
          }

        }
      );
    } else {
      this.subscription.unsubscribe();
    }

  }

}
