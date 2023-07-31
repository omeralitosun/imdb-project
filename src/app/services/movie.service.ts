import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { 
  }
  path = "http://localhost:3000/movies";
  //path = "https://imdb-top-100-movies.p.rapidapi.com/";

  getMovies():Observable<any[]>{
    /*const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'key',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      })
    }*/
    return this.http.get<any[]>(this.path,/*httpOptions*/).pipe(
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
