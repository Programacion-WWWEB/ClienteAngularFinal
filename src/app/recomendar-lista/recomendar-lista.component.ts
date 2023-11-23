import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneroListaService } from '../listarService/genero-lista.service';
import { RecomendarListaService } from '../listarService/recomendar-lista.service';
import { Album } from '../modelo/album.interface';
import { Genero } from '../modelo/genero.interface';
import { Recomendacion } from '../modelo/recomendacion.interface';
import { AlbumService } from '../objetoServices/album.service';
import { GeneroService } from '../objetoServices/genero.service';
import { RecomendacionService } from '../objetoServices/recomendacion.service';
@Component({
  selector: 'app-recomendar-lista',
  templateUrl: './recomendar-lista.component.html',
  styleUrls: ['./recomendar-lista.component.css']
})
export class RecomendarListaComponent implements OnInit{

  clickedGenero: Genero = {} as Genero;

  recomendaciones : Recomendacion[] = []
  genero: Observable<Genero>[] = []
  album: Observable<Album>[] = []
  albums: Album[] = [];
  generoId: number = -1;
  showRecomendacion: boolean = true

  selectedAlbumId: number = -1;

  constructor(private recomendarListaService: RecomendarListaService, private geroLista: GeneroListaService,private route: ActivatedRoute, private generoService: GeneroService, private albumService: AlbumService, private recomendarService: RecomendacionService){

    this.route.params.subscribe(params => {
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

  onAlbumSelected(albumId: number): void {
    this.selectedAlbumId = albumId;
    console.log(albumId);

    if (this.selectedAlbumId && this.generoId) {
      // Fetch details for the selected genero and album
      this.generoService.detail(this.generoId).subscribe(
        (genero: Genero) => {
          console.log("Genero details:", genero);

          this.albumService.detail(this.selectedAlbumId).subscribe(
            (album: Album) => {
              console.log("Album details:", album);


              const recommendation: Recomendacion = {
                id: this.generoId,
                album_id: this.selectedAlbumId,
                genero: {
                  id: genero.id,
                  nombre: genero.nombre,
                },
                album: {
                  album_id: album.album_id,
                name: album.name,
                artist: album.artist,
                type: album.type,
                release_date: album.release_date,
                rym_rating: album.rym_rating,
                language: album.language,
                genres: album.genres,
                colorscheme: album.colorscheme,
                trackListing: album.trackListing,
                },
              };

              // Save the recommendation
              this.recomendarService.save(recommendation).subscribe(
                () => {
                  console.log("Recommendation saved successfully!");
                  window.location.reload();
                },
                (error) => {
                  console.error('Error saving recommendation:', error);
                }
              );
            },
            (error) => {
              console.error('Error fetching album details:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching genero details:', error);
        }
      );
    }
  }
}


