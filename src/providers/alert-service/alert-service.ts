import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class AlertServiceProvider {

  constructor(public alertCtrl: AlertController) {}

  presentAlert(message){
    let alert = this.alertCtrl.create({
      title: message,
      inputs: [
        {
          name: 'baseUrl',
          placeholder: 'Base Url'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Set',
          handler: data => {
            console.log(data.baseUrl)
            localStorage.setItem('baseUrl',data.baseUrl);
          }
        }
      ]
    });
    alert.present();
  }


}
