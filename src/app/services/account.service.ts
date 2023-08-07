import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() {
   
    
   }
  loggedIn = false;
  users:User[] =[{userName:"omerali",password:"12345",favoriMovies:[]}];
  user:User= new User();

  login(userName:string,password:string):boolean{
    let isExists = false;
    this.logOut();
    
    this.users.forEach((user) => {
      console.log("1"+ user.userName+" "+user.password);
      if(user.userName==userName&&user.password==password){
        this.user=user;
        this.loggedIn= true;
        localStorage.setItem("userName",userName);
        localStorage.setItem("password",password);
        console.log(user.userName+" "+user.password);
        isExists=true;
      }
    });
    return isExists;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    this.loggedIn=false;
  }
}
