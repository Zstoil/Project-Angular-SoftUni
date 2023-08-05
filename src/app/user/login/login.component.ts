import { Component } from '@angular/core';
import { appEmailDomains } from 'src/app/shared/constants';
// import { UserService } from '../user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains= appEmailDomains
  // UserService: any;

  // loginHandler(form: NgForm): void{
  //   this.UserService.user ={
  //     username:'John'
  //   }
  // } as any;
  loginHandler(){
    console.log();
    
  }
}
