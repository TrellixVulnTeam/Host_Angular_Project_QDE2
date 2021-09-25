import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/Constants/AppConstants';
import { LoginRequest } from 'src/app/Models/RequestModels/login-request';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  login(loginRequest : LoginRequest )
  {
     const body=JSON.parse(JSON.stringify(loginRequest));
    
     let urlForLogin=baseUrl+'users/login';
    //let urlForLogin="http://192.168.1.13:8080/users/spRw8ghVUBhiEZQI5bHhZXKucuB9Ff";
   //let urlForLogin="http://192.168.1.13:8080/dummy";
    //return this.httpClient.get(urlForLogin,{headers:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTYXF1aWJAZ21haWwuY29tIiwiZXhwIjoxNjIzMjM3NTQ1fQ.92jFheuqqbcSneKK7hT8p13Z8-vA9XSBjOSlMfyzDUNBUr8BooK4UZPXzAsnD-x9Fn1n-IYDJ3Vb7bp4wn7JYg"}});
    return this.httpClient.post(urlForLogin,body,{observe:'response'});
  }
}