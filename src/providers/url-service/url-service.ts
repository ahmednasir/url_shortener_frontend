import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UrlServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UrlServiceProvider Provider');
  }

  shortenUrl(longUrl): Observable<any> {
    let baseUrl = localStorage.getItem('baseUrl');

    if (!baseUrl) {
      baseUrl = "http://15.206.166.177:3000"
    }

    let url = baseUrl + "/api/url/shorten";
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
