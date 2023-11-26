import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../modelo/track.interface';
import { TrackDTO } from '../modelo/trackDTO.interface';
@Injectable()
export class TrackService {

  TrackURL = 'http://localhost:8080/Track';

  constructor(private httpClient: HttpClient) { }

  public lista(token: String): Observable<Track[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Track[]>(this.TrackURL +`/Lista`, {headers});
  }

  public detail(id: number,token: String): Observable<Track> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Track>(this.TrackURL +`/Buscar/${id}`, {headers});
  }

  public save(producto: TrackDTO, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.post<any>(this.TrackURL +`/Agregar`, producto, {headers});
  }

  public update(producto: Track, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.put<any>(this.TrackURL +`/Actualizar`, producto, {headers});
  }

  public delete(id: number, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.delete<any>(this.TrackURL +`/Borrar/${id}`, {headers});
  }
}
