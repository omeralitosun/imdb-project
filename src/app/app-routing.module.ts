import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './login/login.guard';

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "movies/detail/:id", component: MovieDetailComponent,canActivate:[authGuard] },
  { path: '', redirectTo: "movies", pathMatch: 'full' },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
