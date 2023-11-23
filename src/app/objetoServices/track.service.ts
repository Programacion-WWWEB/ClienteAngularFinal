import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../modelo/track.interface';
import { TrackDTO } from '../modelo/trackDTO.interface';
@Injectable()
export class TrackService {

  TrackURL = 'http://localhost:8080/Track';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.TrackURL +`/Lista`);
  }

  public detail(id: number): Observable<Track> {
    return this.httpClient.get<Track>(this.TrackURL +`/Buscar/${id}`);
  }

  public save(producto: TrackDTO, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.post<any>(this.TrackURL +`/Agregar`, producto);
  }

  public update(producto: Track): Observable<any> {
    return this.httpClient.put<any>(this.TrackURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.TrackURL +`/Borrar/${id}`);
  }
}
