import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/modelo/genero.interface';
import { GeneroService } from 'src/app/objetoServices/genero.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  genero: Genero;

  constructor(
    private generoService: GeneroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.detail(id,jwtToken).subscribe(
      data => {
        this.genero = data;
      }
    );
  }
  }
  onUpdate(): void {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {

      console.log('Token not found');
    }else{
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.update(id, this.genero,jwtToken).subscribe(
      data => {
        this.router.navigate(['/menu-admin-genero']);
      }
    );
  }

}
}
