import { Component, OnInit } from '@angular/core';
import { AlbumListarService } from '../listarService/album-listar.service';
import { Album } from '../modelo/album.interface';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit{

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  constructor(private albumListaService: AlbumListarService){

  }
  ngOnInit(): void {
    this.albumListaService.getAll().subscribe((data: Album[]) => {

      this.albumes = data;
    })
  }
//Vuelve el colorscheme transparente
  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`;
  }

}
