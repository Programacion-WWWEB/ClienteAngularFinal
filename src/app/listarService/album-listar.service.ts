import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album.interface';

@Injectable()
export class AlbumListarService {

  constructor(private http: HttpClient) {}

  getAll(token: String): Observable<Album[]>{


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get<Album[]>("//localhost:8080/Album/Lista", {headers});
  }
}
