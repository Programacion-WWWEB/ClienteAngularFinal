import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdleService } from '../idle.service';
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
  isUserActive: boolean;

  constructor(private generoListaService: GeneroListaService, private router: Router, private idleService: IdleService){}
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

  this.idleService.isUserActive().subscribe((isActive: boolean) => {
    this.isUserActive = isActive;

    if (!isActive) {

      localStorage.removeItem('jwtToken');


      this.router.navigate(['/home']);

      console.log('User is idle. Redirecting or showing a modal...');
    }
  });
  }
  handleGeneroClick(genero: Genero) {
    this.clickedGenero = genero;
    this.router.navigate(['/cliente/recomendar-lista', {genero: genero.id}]);
  }

  onUserInteraction(): void {
    this.idleService.resetIdleTimer();
  }

}
