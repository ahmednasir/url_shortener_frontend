import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UrlServiceProvider } from '../../providers/url-service/url-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  longUrl:string = ''
  shortUrl : string = ''
  constructor(public navCtrl: NavController, private urlService: UrlServiceProvider) {
  }
  
  shorten(){
    this.urlService.shortenUrl(this.longUrl).subscribe(data=>{
      console.log(data.body.shortUrl)
      this.shortUrl = data.body.shortUrl
    },err=>{
      console.log(err)
    })
  }

}
