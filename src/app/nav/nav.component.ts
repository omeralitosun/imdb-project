import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private accountService:AccountService,private router:Router){}
  filterText:string="";

  filterMovies(){
    alert(this.filterText);
  }
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logout(){
    this.accountService.logOut();
    this.router.navigate(['/login']);
  }
}
