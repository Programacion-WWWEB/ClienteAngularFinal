import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Recomendacion } from '../modelo/recomendacion.interface';

@Injectable()
export class RecomendarListaService {

  constructor(private http: HttpClient) {}

  getAll(token: String): Observable<Recomendacion[]>{

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get<Recomendacion[]>("//localhost:8080/Recomendacion/Lista", {headers}).pipe(
      catchError(error => {
        console.error('HTTP Error:', error);
        throw error;
      }
    )
    )
}}
