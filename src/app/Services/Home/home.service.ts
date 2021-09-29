import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/Constants/AppConstants';
import { UserResponseModel } from 'src/app/Models/ResponseModels/sign-up-response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  GetUserDetails( )
  {
    let userDetailsUrl=baseUrl+"users/"+localStorage.getItem("userId");    

    return this.httpClient.get<UserResponseModel>(userDetailsUrl);
  }

}
