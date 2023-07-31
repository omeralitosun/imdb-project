import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})

export class MoviesComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService){}
  movies: any[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let filterText = params["filterText"];
      this.movieService.getMovies().subscribe(data=>{
        console.log(data);
        this.movies = filterText?data.filter((p:any)=> p.title.toLocaleLowerCase().indexOf(filterText?filterText.toLocaleLowerCase():"")!==-1):data;
      });
      
      
    });
  }
}
