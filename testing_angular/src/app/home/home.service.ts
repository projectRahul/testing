import { Injectable } from '@angular/core';
import { Ihome } from './Ihome';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
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

        return _throw('There is a problem with the service.');
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

    getPatientMedicationDetailsPagin(rec): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getPatientMedicationDetailsPagin', rec, httpOptions)
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

    getSampleCollection(collection_name): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'getSampleCollection',collection_name,httpOptions)
        .pipe(catchError(this.handleError));
    }

    uploadCsv(csvValues : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'csvRecord', csvValues,httpOptions)
        .pipe(catchError(this.handleError));
    }

    addNewMedication(addMedicationValues : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'addNewMedication', addMedicationValues,httpOptions)
        .pipe(catchError(this.handleError));
    }

    updateMedRecord(medRecordValues : Ihome): Observable<Ihome> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Ihome>(this.baseUrl+'updateMedRecord', medRecordValues,httpOptions)
        .pipe(catchError(this.handleError));
    }
}
