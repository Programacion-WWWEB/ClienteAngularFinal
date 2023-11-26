import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recomendacion } from '../modelo/recomendacion.interface';
@Injectable()
export class RecomendacionService {

  GeneroURL = 'http://localhost:8080/Recomendacion';

  constructor(private httpClient: HttpClient) { }

  public lista(token: String): Observable<Recomendacion[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Recomendacion[]>(this.GeneroURL +'/Lista', {headers});
  }

  public save(producto: Recomendacion, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.post<any>(this.GeneroURL +'/Agregar', producto, {headers});
  }
}
