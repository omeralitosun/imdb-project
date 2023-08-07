import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})

export class MoviesComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService,private accountService:AccountService){}
  movies: any[];
  filterText:string;
  isFavorites:string;
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.filterText = params["filter"];
      this.isFavorites = params["isFavorites"];
      
      this.movieService.getMovies().subscribe(data=>{
        this.movies = this.filterText?data.filter((p:any)=> p.title.toLocaleLowerCase().indexOf(this.filterText?this.filterText.toLocaleLowerCase():"")!==-1):data;
      });   
      
      if(this.isFavorites){
      this.movieService.getMovies().subscribe(data=>{
        this.movies = this.isFavorites=="true"?data.filter(p=> this.accountService.user.favoriMovies?.some(id=>{
          return id==p.rank;
        })):data;
      }); 
    }  
    });
  }

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  addFavorite(movieId:number){
    
    if( this.accountService.user.favoriMovies.some(id=>{
      return id==movieId;
    })){
      this.accountService.user.favoriMovies = this.accountService.user.favoriMovies.filter(item => item!==movieId);
    } else{
      this.accountService.user.favoriMovies.push(movieId);
    }
    console.log(this.accountService.user.favoriMovies);
  }

  isExistsFavorite(movieId:number){
    return this.accountService.user.favoriMovies.some(id=>{
      return id==movieId;
    });
  }
}
