import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroService } from 'src/app/objetoServices/genero.service';
import { Genero } from 'src/app/modelo/genero.interface';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  generos :Array<any> = [];
  clickedGenero: Genero | null = null;


  constructor(private generoService: GeneroService, private router: Router){}
  ngOnInit(): void {
    this.generoService.lista().subscribe(data => {

      this.generos = data;
    })

    this.generoService.generoClick$.subscribe((genero) =>
      this.handleGeneroClick(genero));
  }

  handleGeneroClick(genero: Genero) {
    this.clickedGenero = genero;
    this.router.navigate(['/recomendar-lista', {genero: genero.id}]);
  }

}
