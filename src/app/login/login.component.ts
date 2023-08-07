import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accountService:AccountService,private router:Router){
  }
  userName:string="";
  password:string="";

  login(){
    if(this.accountService.login(this.userName,this.password)){
      this.router.navigate(['/movies']);
    }else{
      alert("kullanıcı adı veya şifre hatalı");
    }
  }
}
