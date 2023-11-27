import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TrackDTO } from '../modelo/trackDTO.interface';
import { Voto } from '../modelo/voto.interface';
@Injectable()
export class VotoService {

  constructor(private httpClient: HttpClient) { }

  VotoURL = 'http://localhost:8080/Voto';


  public save(producto: TrackDTO, token: String): Observable<any> {

    const jwtToken = localStorage.getItem('jwtToken');

    const [_, payloadBase64]: string[] = token.split('.');

const decodedPayload: string = atob(payloadBase64);
console.log(decodedPayload);
    console.log(token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    })
    return this.httpClient.post<any>(this.VotoURL + `/AgregarClick`, producto, { headers, observe: 'response' })
  .pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      if (error.error instanceof ErrorEvent) {

        console.error('An error occurred:', error.error.message);
      } else {

        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      }

      return throwError('Something bad happened; please try again later.');
    })
  );

  }

  public lista(token: String): Observable<Voto[]> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Voto[]>(this.VotoURL +`/Lista`, { headers });
  }

  public check(track_id:number, id:number, token: String): Observable<Voto[]> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    let params = new HttpParams();
    params = params.append('track_id', track_id.toString());
    params = params.append('id', id.toString());
    return this.httpClient.get<Voto[]>(this.VotoURL +`/check`, { headers,params });
  }

}
