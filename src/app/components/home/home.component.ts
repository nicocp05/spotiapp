import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';
import { SpotiResponse } from '../../interfaces/new-releases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newRelease: SpotiResponse[] = [];

  constructor( private spotiService: SpotiService) {}

  ngOnInit(): void {
    this.getNewRealease();
  }

  getNewRealease() {
    this.spotiService.getNewRealease()
      .subscribe( (res: SpotiResponse) => console.log(res.albums.items)
      )   
  }

}
