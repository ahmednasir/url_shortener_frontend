import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UrlServiceProvider } from "../../providers/url-service/url-service";
import { AlertServiceProvider } from "../../providers/alert-service/alert-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [AlertServiceProvider]
})
export class HomePage {
  longUrl: string = "";
  shortUrl: string = "";
  constructor(
    public navCtrl: NavController,
    private urlService: UrlServiceProvider,
    public alertService: AlertServiceProvider
  ) {}

  shorten() {
    
    if (this.longUrl) {
      this.urlService.shortenUrl(this.longUrl).subscribe(
        data => {
          console.log(data.body.shortUrl);
          this.shortUrl = data.body.shortUrl;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  setBaseURL(){
    this.alertService.presentAlert("Enter base URL")
  }

}
