import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voto } from '../modelo/voto.interface';

@Injectable()
export class VotoListaService {

  constructor(private https: HttpClient) {}

  getAll(): Observable<Voto[]>{
    return this.https.get<Voto[]>("//localhost:8080/Voto/Lista")
  }
}
