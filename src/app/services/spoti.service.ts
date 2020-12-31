import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotiService {

  URI_API = 'https://api.spotify.com/v1/browse/new-releases';

  country = 'ES';

  limit = '10';

  offset = '5'

  constructor(private http: HttpClient) {}

  getNewRealease() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDDnNokhRckC8FniU4rwQLSdn702U07l9q4338A7fTDaKczeYAPUWCNfGt7-DImfYGylb2coMNxIvU-sE'
    });

    return this.http.get( `${this.URI_API}?country=${this.country}&limit=${this.limit}&offset=${this.offset}`, { headers } );
  }

}
