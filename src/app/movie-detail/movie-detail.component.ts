import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MovieService]
})
export class MovieDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private movieService:MovieService) { }
  movie:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let rank = params["id"];
      this.movieService.getMovieByRank(rank).subscribe(data=>{
        //this.movie=data[0]; // For json-server
        this.movie=data; //For api
      });
    });
  }
}
