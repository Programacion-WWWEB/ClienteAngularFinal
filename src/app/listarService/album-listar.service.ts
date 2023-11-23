import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album.interface';

@Injectable()
export class AlbumListarService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Album[]>{

    return this.http.get<Album[]>("//localhost:8080/Album/Lista");
  }
}
