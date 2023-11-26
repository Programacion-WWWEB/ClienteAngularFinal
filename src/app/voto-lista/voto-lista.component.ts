import { Component, OnInit } from '@angular/core';
import { VotoListaService } from '../listarService/voto-lista.service';
import { Voto } from '../modelo/voto.interface';
@Component({
  selector: 'app-voto-lista',
  templateUrl: './voto-lista.component.html',
  styleUrls: ['./voto-lista.component.css']
})
export class VotoListaComponent implements OnInit {

  voto: Voto[]= []

  constructor(private votoListaService: VotoListaService){}

  ngOnInit(): void {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
  this.votoListaService.getAll(jwtToken).subscribe((data: Voto[])=>{

    this.voto = data;
  })
  }

}}
