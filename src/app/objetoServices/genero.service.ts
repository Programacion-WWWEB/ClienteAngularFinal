import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Genero } from '../modelo/genero.interface';
@Injectable()
export class GeneroService {

  GeneroURL = 'http://localhost:8080/Genero';

  constructor(private httpClient: HttpClient) { }

  private generoClickSource = new Subject<Genero>();

  generoClick$ = this.generoClickSource.asObservable();

  triggerGeneroClick(genero: Genero) {
    this.generoClickSource.next(genero);
  }

  public lista(token: String): Observable<Genero[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Genero[]>(this.GeneroURL +`/Lista`, {headers});
  }

  public detail(id: number,token: String): Observable<Genero> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Genero>(this.GeneroURL +`/Buscar/${id}`, {headers});
  }

  public save(producto: Genero, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.post<any>(this.GeneroURL +`/Agregar`, producto, {headers});
  }

  public update(id: number, producto: Genero, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.put<any>(this.GeneroURL +`/Actualizar`, producto, {headers});
  }

  public delete(id: number, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.delete<any>(this.GeneroURL +`/Borrar/${id}`, {headers});
  }
}
