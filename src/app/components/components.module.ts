import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArtistComponent,
    NavbarComponent
  ],
  exports: [
    HomeComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
