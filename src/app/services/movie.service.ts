import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { 
  }
  moviesPath = "http://localhost:3000/movies";
  //moviesPath = "https://imdb-top-100-movies.p.rapidapi.com/";

  getMoviePath="http://localhost:3000/movies?rank=";
  //getMoviePath = "https://imdb-top-100-movies.p.rapidapi.com/top";

  // For imdb-top-100-movies-api
  private httpOptions={
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'key',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    })}

  getMovies():Observable<any[]>{
    return this.http.get<any[]>(this.moviesPath,this.httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getMovieByRank(rank:string):Observable<any>{
    return this.http.get<any>(this.getMoviePath+rank,this.httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu "+err.error.message;
    }else{
      errorMessage = "Sistemsel bir hata";
    }
    return throwError(()=>new Error(errorMessage));
  }
}
