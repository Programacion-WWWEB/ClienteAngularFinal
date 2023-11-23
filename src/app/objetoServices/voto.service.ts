import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackDTO } from '../modelo/trackDTO.interface';
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
      'Authorization': `Bearer ${jwtToken}`
    })
    return this.httpClient.post<any>(this.VotoURL +`/AgregarClick`, producto, {headers});
  }
}
