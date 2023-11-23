import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Recomendacion } from '../modelo/recomendacion.interface';

@Injectable()
export class RecomendarListaService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Recomendacion[]>{

    return this.http.get<Recomendacion[]>("//localhost:8080/Recomendacion/Lista").pipe(
      catchError(error => {
        console.error('HTTP Error:', error);
        throw error;
      }
    )
    )
}}
