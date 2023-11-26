import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album.interface';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[];
  albumURL = 'http://localhost:8080/Album';

  constructor(private httpClient: HttpClient) { }

  public lista(token: String): Observable<Album[]> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Album[]>(this.albumURL +`/Lista`, { headers });
  }

  public detail(id: number, token: String): Observable<Album> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.get<Album>(this.albumURL +`/Buscar/${id}`, { headers });
  }

  public detailnoToken(id: number): Observable<Album> {

    return this.httpClient.get<Album>(this.albumURL +`/Buscar/${id}`);
  }


  public save(producto: Album, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.post<any>(this.albumURL +`/Agregar`, producto, {headers});
  }

  public update(id: number, producto: Album, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.httpClient.put<any>(this.albumURL +`/Actualizar`, producto, {headers});
  }

  public delete(id: number, token: String): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.httpClient.delete<any>(this.albumURL +`/Borrar/${id}`, {headers});
  }

  public getAlbums(): Album[] {
    return this.albums;
  }

  public setAlbums(albums: Album[]): void {
    this.albums = albums;
  }


}
