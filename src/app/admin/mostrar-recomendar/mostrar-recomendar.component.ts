import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneroListaService } from 'src/app/listarService/genero-lista.service';
import { RecomendarListaService } from 'src/app/listarService/recomendar-lista.service';
import { Album } from 'src/app/modelo/album.interface';
import { Genero } from 'src/app/modelo/genero.interface';
import { Recomendacion } from 'src/app/modelo/recomendacion.interface';

@Component({
  selector: 'app-mostrar-recomendar',
  templateUrl: './mostrar-recomendar.component.html',
  styleUrls: ['./mostrar-recomendar.component.css']
})
export class MostrarRecomendarComponent implements OnInit{

  clickedGenero: Genero = {} as Genero;

  recomendaciones : Recomendacion[] = []
  genero: Observable<Genero>[] = []
  album: Observable<Album>[] = []
  albums: Album[] = [];
  generoId: number = -1;
  showRecomendacion: boolean = true

  constructor(private recomendarListaService: RecomendarListaService, private geroLista: GeneroListaService,private route: ActivatedRoute){

    this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      if (params['genero']) {
        this.generoId = +params['genero'];

      }
    });
  }
  ngOnInit(): void {
    this.recomendarListaService.getAll().subscribe((data: Recomendacion[])=>{
      console.log( data )
      this.recomendaciones = data

      this.matchAlbumsByGenero(this.generoId);
    },
    (error) => {
      console.error('Error fetching data:', error);
    })

  }


  matchAlbumsByGenero(generoId: number) {
    console.log("Clicked Genero ID:", generoId);
    console.log("recomendaciones: ", this.recomendaciones)
    const filteredRecomendaciones = this.recomendaciones.filter((recomendacion) => recomendacion.genero.id === generoId);
  console.log("Filtered Recomendaciones:", filteredRecomendaciones);

  this.albums = filteredRecomendaciones.map((recomendacion) => recomendacion.album);
  console.log("Albums:", this.albums);

    this.albums = this.recomendaciones
      .filter((recomendacion) => recomendacion.genero.id === generoId)
      .map((recomendacion) => recomendacion.album);
      console.log("albums:", this.albums);
  }


}
