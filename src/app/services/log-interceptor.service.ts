import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,
   next: HttpHandler): 
   Observable<HttpEvent<any>> {
      console.log(`-----> Http Method: ${req.method} <-----`);
      console.log(`-----> URL: ${req.url} <-----`);
      console.log(`-----> Response type: ${req.responseType} <-----`);
      return next.handle(req);
  }
}
