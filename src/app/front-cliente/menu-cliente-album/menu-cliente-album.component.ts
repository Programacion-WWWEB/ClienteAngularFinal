
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/objetoServices/album.service';
import { Album } from '../../modelo/album.interface';
@Component({
  selector: 'app-menu-cliente-album',
  templateUrl: './menu-cliente-album.component.html',
  styleUrls: ['./menu-cliente-album.component.css']
})
export class MenuClienteAlbumComponent implements OnInit {

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
  }
  //Vuelve el colorscheme transparente
  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 1)`;
  }
  cargar(): void {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    this.albumService.lista(jwtToken).subscribe(
      data => {
        this.albumes = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
}
