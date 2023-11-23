import { HttpClient } from '@angular/common/http';
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

    public lista(): Observable<UsuarioVotante[]> {
      return this.httpClient.get<UsuarioVotante[]>(this.UsuarioURL +'/Lista');
    }

    public detail(id: number): Observable<UsuarioVotante> {
      return this.httpClient.get<UsuarioVotante>(this.UsuarioURL +'/Buscar/${id}');
    }

    public save(producto: UsuarioVotante): Observable<any> {
      return this.httpClient.post<any>(this.UsuarioURL +'/Agregar', producto);
    }

    public update(id: number, producto: UsuarioVotante): Observable<any> {
      return this.httpClient.put<any>(this.UsuarioURL +'/Actualizar', producto);
    }

    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.UsuarioURL +'/Borrar/${id}');
    }
}
