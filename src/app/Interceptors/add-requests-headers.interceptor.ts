import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { securityConstants } from '../Constants/AppConstants';

@Injectable()
export class AddRequestsHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem(securityConstants.tokenString)!=undefined) {
     
      const modifiedRequest = request.clone({
        headers: request.headers.set(
          securityConstants.headerString,
          localStorage.getItem(securityConstants.tokenString)
        ),
      });

      return next.handle(modifiedRequest);
       
    }
    else
      return next.handle(request);

  }
}
