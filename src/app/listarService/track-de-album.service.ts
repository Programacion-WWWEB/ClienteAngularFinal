import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album.interface';

@Injectable()
export class TrackDeAlbumService {

  private apiUrl = 'http://localhost:8080/Album';


  constructor(private http: HttpClient) {}


  getAlbumById(albumId: string, token: String): Observable<Album> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const url = `${this.apiUrl}/Buscar/${albumId}`;
    return this.http.get<Album> (url, {headers});
  }
}
