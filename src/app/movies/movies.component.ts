import { Component, OnInit } from '@angular/core';
import movies from './data.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute){}
  movies: any[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      let filterText = params["filterText"];
      this.movies = filterText?movies.filter((p:any)=> p.title.toLocaleLowerCase().indexOf(filterText?filterText.toLocaleLowerCase():"")!==-1):movies;
    });
  }
}
