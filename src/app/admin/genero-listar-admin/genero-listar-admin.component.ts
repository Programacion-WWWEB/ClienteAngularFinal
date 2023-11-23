import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/modelo/genero.interface';
import { GeneroService } from 'src/app/objetoServices/genero.service';

@Component({
  selector: 'app-genero-listar-admin',
  templateUrl: './genero-listar-admin.component.html',
  styleUrls: ['./genero-listar-admin.component.css']
})
export class GeneroListarAdminComponent implements OnInit {

  generos: Genero[] = [];
  constructor(private generoService: GeneroService, private router: Router) {

  }

  clickedGenero: Genero | null = null;

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.generoService.lista().subscribe(
      data => {
        this.generos = data;
      },
      err => {
        console.log(err);
      }
    );

    this.generoService.generoClick$.subscribe((genero) =>
      this.handleGeneroClick(genero));
  }

  handleGeneroClick(genero: Genero) {
    this.clickedGenero = genero;
    this.router.navigate(['/recomendar-lista', { genero: genero.id }]);
  }


  borrar(id: number) {
    this.generoService.delete(id).subscribe(
      (response) => {
        console.log('se borro album')
        window.location.reload();
      },
      (error) => {
        console.error('error fetching data')
      }
    );

  };
}


