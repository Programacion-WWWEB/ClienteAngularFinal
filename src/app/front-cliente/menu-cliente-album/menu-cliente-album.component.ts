
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdleService } from 'src/app/idle.service';
import { AlbumService } from 'src/app/objetoServices/album.service';
import { Album } from '../../modelo/album.interface';
@Component({
  selector: 'app-menu-cliente-album',
  templateUrl: './menu-cliente-album.component.html',
  styleUrls: ['./menu-cliente-album.component.css']
})
export class MenuClienteAlbumComponent implements OnInit {

  showInfoAlbumConTracks: boolean = true
  isUserActive: boolean;

  albumes: Album[] = [];
  constructor(private albumService: AlbumService, private router: Router, private idleService: IdleService) {

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

    this.idleService.isUserActive().subscribe((isActive: boolean) => {
      this.isUserActive = isActive;

      if (!isActive) {

        localStorage.removeItem('jwtToken');


        this.router.navigate(['/home']);

        console.log('User is idle. Redirecting...');
      }
    });


  }
}

onUserInteraction(): void {
  this.idleService.resetIdleTimer();
}
}
