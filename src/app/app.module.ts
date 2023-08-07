import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { User } from './login/user';
import { LoginGuard } from './login/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MoviesComponent,
    MovieFilterPipe,
    MovieDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [AccountService,User,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
