import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/index';
import { catchError, map } from 'rxjs/internal/operators';
import { MessageService } from './message.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(public messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const data = {
          message: error.message,
          status: error.status
        };

        this.messageService.showMessage(data);

        return throwError(error);
      }));
  }
}
