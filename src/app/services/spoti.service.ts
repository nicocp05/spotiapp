import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotiService {

  URI_API = 'https://api.spotify.com/v1/browse/new-releases?country=ES&limit=10&offset=5';

  constructor(private http: HttpClient) {console.log('Service');
   }

  getNewRealease() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDaLMyQRczOXvgEWkISbPtq0WctJsbMZadJn1YtvFK73AUKWNx2uj-ouGX6bRhiaUbXLiGNPRvXmiu7EPI'
    });

    return this.http.get( this.URI_API, { headers } );
  }

}
