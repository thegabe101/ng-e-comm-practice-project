import { Component, OnInit, Input } from '@angular/core';
import { BootstrapOptions } from '@angular/core';
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // template: `<h1>Favorite this course:</h1>
  // <span>
  //   <button class="icon" [class]="isFavorite"><fa-icon [icon]="faStar"></fa-icon></button>
  //   <button class="icon" [class]="!isFavorite"><fa-icon [icon]="faStarHalf"></fa-icon></button>
  // </span>
  // `,
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})


export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  // isFavorite = true;

  constructor() {

  }

  faStar = faStar;
  faStarHalf = faStarHalf;

  ngOnInit() {
  }

  onClick() {
    //simple toggle
    this.isFavorite = !this.isFavorite;

    console.log('click')
  }
}
