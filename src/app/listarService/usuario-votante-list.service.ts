import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioVotante } from '../modelo/usuarioVotante.interface';

@Injectable()
export class UsuarioVotanteListService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<UsuarioVotante[]>{
   return this.httpClient.get<UsuarioVotante[]>("//localhost:8080/UsuarioVotante/Lista")

  }
}
