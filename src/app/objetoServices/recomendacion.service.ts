import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recomendacion } from '../modelo/recomendacion.interface';
@Injectable()
export class RecomendacionService {

  GeneroURL = 'http://localhost:8080/Recomendacion';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Recomendacion[]> {
    return this.httpClient.get<Recomendacion[]>(this.GeneroURL +'/Lista');
  }

  public save(producto: Recomendacion): Observable<any> {
    return this.httpClient.post<any>(this.GeneroURL +'/Agregar', producto);
  }
}
