import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioVotante } from '../modelo/usuarioVotante.interface';

@Injectable()
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) {}

  addUser(user: UsuarioVotante){

    return this.http.post('/UsuarioVotante/Agregar', user);
  }
}
