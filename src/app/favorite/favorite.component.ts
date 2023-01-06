import { Component } from '@angular/core';
import { BootstrapOptions } from '@angular/core';
import icons from 'glyphicons';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // template: `<h1>Favorite this course:</h1>
    
  // `,
  styleUrls: ['./favorite.component.css']
})


export class FavoriteComponent {
  isFavorite: boolean;

  constructor() {

  }

  onClick() {
    //simple toggle
    this.isFavorite = !this.isFavorite;
  }
}
