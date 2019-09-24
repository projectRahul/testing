import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from '../baseurl.service';
import { CookieService } from 'ngx-cookie-service';

// import { MyInterceptor } from '../my-interceptor';

@Injectable()
export class LearningService {
    constructor(private httpClient: HttpClient,
                private baseurl : BaseurlService,
                private cookieService: CookieService) { }

    baseUrl = this.baseurl.getBaseUrl();

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return _throw('There is a problem with the service.');
    }

   
	sendMail(mailcontent): Observable<any> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<any>(this.baseUrl+'sendmail', mailcontent,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getUserDetailsQR(name): Observable<any> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<any>(this.baseUrl+'getUserDetailsQR', name,httpOptions)
        .pipe(catchError(this.handleError));
    }
}
