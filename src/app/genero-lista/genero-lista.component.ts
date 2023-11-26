import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroListaService } from '../listarService/genero-lista.service';
import { Genero } from '../modelo/genero.interface';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  generos :Array<any> = [];
  clickedGenero: Genero | null = null;


  constructor(private generoListaService: GeneroListaService, private router: Router){}
  ngOnInit(): void {

    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{

    this.generoListaService.getAll(jwtToken).subscribe(data => {

      this.generos = data;
    })

    this.generoListaService.generoClick$.subscribe((genero) =>
      this.handleGeneroClick(genero));
  }
  }
  handleGeneroClick(genero: Genero) {
    this.clickedGenero = genero;
    this.router.navigate(['/cliente/recomendar-lista', {genero: genero.id}]);
  }

}
