import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TokenPostBackendService {

  constructor(private http: HttpClient) { }

  sendPostRequestWithToken(payload: any): Observable<any> {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      // Handle the case where the token is not available
      return throwError('Token not found');
    }

    // Set the headers with the JWT token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    });

    return this.http.post('/public/tokenUser', payload, { headers });
}

sendPostRequestWithTokenAdmin(payload: any): Observable<any> {
  const jwtToken = localStorage.getItem('jwtToken');

  if (!jwtToken) {
    // Handle the case where the token is not available
    return throwError('Token not found');
  }

  // Set the headers with the JWT token
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtToken}`
  });

  return this.http.post('/admin/tokenUser', payload, { headers });
}

}
