import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voto } from '../modelo/voto.interface';

@Injectable()
export class VotoListaService {

  constructor(private https: HttpClient, token: String) {}

  getAll(token: String): Observable<Voto[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.https.get<Voto[]>("//localhost:8080/Voto/Lista", {headers})
  }
}
