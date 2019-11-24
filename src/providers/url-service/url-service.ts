import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UrlServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UrlServiceProvider Provider');
  }

  shortenUrl(longUrl): Observable<any>{
    let url = "http://192.168.1.3:5000/api/url/shorten";
    let body = {
      longUrl: longUrl
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, body, {
      headers: headers,
      observe: "response"
    })
    
  }

}
