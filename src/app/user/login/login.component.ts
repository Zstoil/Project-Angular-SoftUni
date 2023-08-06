import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains= appEmailDomains
  
  constructor(private userService: UserService, private router:Router){}

  loginHandler(form: NgForm): void{
    
    {
      if (form.invalid) {return;}
 
       const {email, password} = form.value;
       this.userService.login(email!,password!)
       .subscribe(
         user => {
           this.userService.user = user;
           this.router.navigate(['/']);
         }
       )
      }
  }

  
}
