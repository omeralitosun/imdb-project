import { Component } from '@angular/core';
import movies from './data.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  filterText:string ="";
  movies: any[]= movies
}
