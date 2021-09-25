import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formsValidationMessages } from 'src/app/Constants/AppConstants';
import { LoginRequest } from 'src/app/Models/RequestModels/login-request';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup =new FormGroup({ 
    email: new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  headers;
  config;
  formsValidationMessages=formsValidationMessages;
  constructor(private service: LoginService, private router:Router) { 
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }

  login()
  {
    let loginRequest:LoginRequest=new LoginRequest(this.LoginForm.value['email'],this.LoginForm.value['password']);
    this.service.login(loginRequest).subscribe(
      resp => {        
        if(resp.status==200)
        {
          localStorage.setItem('userId',resp.headers.get('UserId'));
          localStorage.setItem('token',resp.headers.get('authorization'));
          this.router.navigateByUrl("/Home");
      }
      else if(resp.status==null)
      {
        alert("Login failed");
      }
      },
      err=>{
        
        alert("Invalid Credentials");
      }
      );
      
  }

  ngOnInit(): void {
  }

}
