import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['']
    },{
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
   
  })


  constructor(private fb: FormBuilder , private userService: UserService, private router:Router) {}


    registerHandler(){
     if (this.form.invalid) {return;}

      const {username, email, pass: {password, rePassword} = {}} = this.form.value;
      this.userService.register(username!,email!,password!,rePassword!)
      .subscribe(
        user => {
          this.userService.user = user;
          this.router.navigate(['/']);
        }
      )
     }

      
}


