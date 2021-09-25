import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/Constants/AppConstants';
import { SignUpRequestModel } from 'src/app/Models/RequestModels/sign-up-request';
import { UserResponseModel } from 'src/app/Models/ResponseModels/sign-up-response';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient:HttpClient) { }

  SignUp(signUpRequestModel : SignUpRequestModel )
  {
    let signUpUrl=baseUrl+"users";
    let body=JSON.parse(JSON.stringify(signUpRequestModel));
    return this.httpClient.post<UserResponseModel>(signUpUrl,body);
  }

}