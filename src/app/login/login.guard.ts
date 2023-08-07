import { Injectable, inject } from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard {

    constructor(private accountService:AccountService,private router:Router){
      
    }

    canActivate(): boolean {
        if (this.accountService.isLoggedIn()) {
          return true
        } else {
          this.router.navigate(['/login']);
          return false
          }
        }
    
}

export const authGuard: CanActivateFn = (route, state) => {
    return inject(LoginGuard).canActivate();
  };