import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token: string;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        request = request.clone({
            setParams: {
                'api_key': environment.apiKey
            }
        });

        return next.handle(request);
    }




}