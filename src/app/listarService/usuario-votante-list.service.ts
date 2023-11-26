import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioVotante } from '../modelo/usuarioVotante.interface';

@Injectable()
export class UsuarioVotanteListService {

  constructor(private httpClient: HttpClient) { }

  getAll(token: String):Observable<UsuarioVotante[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
   return this.httpClient.get<UsuarioVotante[]>("//localhost:8080/UsuarioVotante/Lista", {headers})

  }
}
