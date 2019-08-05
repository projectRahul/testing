import { Injectable } from '@angular/core';
import { Iuser } from './Iuser';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient,
                private baseurl : BaseurlService) { }

    baseUrl = this.baseurl.getBaseUrl();

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return _throw('There is a problem with the service.');
    }

    addUser(user: Iuser): Observable<Iuser> {
        return this.httpClient.post<Iuser>(this.baseUrl+'register.php', user)
        // return this.httpClient.post<Iuser>(this.baseUrl+'user', user)
        .pipe(catchError(this.handleError));
    }
    
    loginUser(user: Iuser): Observable<Iuser> {
        return this.httpClient.post<Iuser>(this.baseUrl+'user/login', user)
        .pipe(catchError(this.handleError));
    }
}
