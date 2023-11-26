import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsuarioVotante } from '../modelo/usuarioVotante.interface';
@Injectable()
export class UsuarioVotanteService {

  UsuarioURL = 'http://localhost:8080/UsuarioVotante';

    constructor(private httpClient: HttpClient) { }

    private UsuarioClickSource = new Subject<UsuarioVotante>();

    UsuarioClick$ = this.UsuarioClickSource.asObservable();

    triggerUsuarioClick(Usuario: UsuarioVotante) {
      this.UsuarioClickSource.next(Usuario);
    }

    public lista(token: String): Observable<UsuarioVotante[]> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.httpClient.get<UsuarioVotante[]>(this.UsuarioURL +'/Lista', {headers});
    }

    public detail(id: number,token: String): Observable<UsuarioVotante> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.httpClient.get<UsuarioVotante>(this.UsuarioURL +'/Buscar/${id}',{headers});
    }

    public save(producto: UsuarioVotante,token: String): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.httpClient.post<any>(this.UsuarioURL +'/Agregar', producto,{headers});
    }

    public update(id: number, producto: UsuarioVotante,token: String): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.httpClient.put<any>(this.UsuarioURL +'/Actualizar', producto,{headers});
    }

    public delete(id: number,token: String): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.httpClient.delete<any>(this.UsuarioURL +'/Borrar/${id}',{headers});
    }
}
