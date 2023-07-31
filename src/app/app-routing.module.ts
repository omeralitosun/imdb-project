import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "movies/detail/:id", component: MovieDetailComponent },
  { path: '', redirectTo: "movies", pathMatch: 'full' },
  { path: 'movies/filter/:filterText', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
