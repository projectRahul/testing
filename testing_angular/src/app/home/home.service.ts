import { Injectable } from '@angular/core';
import { Ihome } from './Ihome';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from '../baseurl.service';
import { CookieService } from 'ngx-cookie-service';

// import { MyInterceptor } from '../my-interceptor';

@Injectable()
export class HomeService {
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

        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    searchPatient(patient : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'searchPatient', patient,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getPatientDetails(unique_no : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getPatientDetails', unique_no,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getPatientMedicationDetails(unique_no : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getPatientMedicationDetails', unique_no,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getPatientMedicationAccDetails(unique_no : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getPatientMedicationDetails', unique_no,httpOptions)
        .pipe(catchError(this.handleError));
    }

    addNewPatient(addPatientValues : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'addNewPatient', addPatientValues,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getDrugDropdown(unique_no : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getDrugDropdown', unique_no,httpOptions)
        .pipe(catchError(this.handleError));
    }

    getCollectionList(): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getCollectionList',httpOptions)
        .pipe(catchError(this.handleError));
    }
}
