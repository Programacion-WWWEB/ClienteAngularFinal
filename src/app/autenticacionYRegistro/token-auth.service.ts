import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class TokenAuthService {


  constructor(private http: HttpClient) {}

  createToken(correo: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer'
    });

    const body = new URLSearchParams();
    body.set('correo', correo);
    body.set('contrasena', contrasena);


    return this.http.post('/public/autenticacion-usuario', body.toString(), {headers})
    .pipe(
      catchError((error: any) => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }

  createAdminToken(correo: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer'
    });

    const body = new URLSearchParams();
    body.set('correo', correo);
    body.set('contrasena', contrasena);


    return this.http.post('/admin/autenticacion-usuario', body.toString(), {headers})
    .pipe(
      catchError((error: any) => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }
}

