import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private spotiService: SpotiService) {}

  ngOnInit(): void {
    this.getNewRealease();
  }

  getNewRealease() {
    this.spotiService.getNewRealease()
      .subscribe( res => console.log( res )
      );
  }

}
