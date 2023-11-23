import { Component, OnInit } from '@angular/core';
import { UsuarioVotanteListService } from '../listarService/usuario-votante-list.service';

@Component({
  selector: 'app-usuario-votante-list',
  templateUrl: './usuario-votante-list.component.html',
  styleUrls: ['./usuario-votante-list.component.css']
})
export class UsuarioVotanteListComponent implements OnInit{

  usuarios: Array<any> = []

  constructor(private usuarioVotanteService: UsuarioVotanteListService){}
  ngOnInit(): void {
  this.usuarioVotanteService.getAll().subscribe(data => {
    this.usuarios = data;
  })
  }

}
