import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerRolesService } from '../autenticacionYRegistro/obtener-roles.service';

@Component({
  selector: 'app-tool-bar-header',
  templateUrl: './tool-bar-header.component.html',
  styleUrls: ['./tool-bar-header.component.css']
})
export class ToolBarHeaderComponent implements OnInit{

  constructor(private router: Router, private authService: ObtenerRolesService) {}
  ngOnInit(): void {

    const userRoles = this.authService.getRoles();
    console.log(userRoles);

    if (userRoles && userRoles.length > 0) {

      if(userRoles.includes('Prueba')){

        console.log('rol Prueba');
      }

    }

  }

navigateToGeneroLista() {

  const userRoles = this.authService.getRoles();
  console.log(userRoles);

   if (userRoles && userRoles.length > 0) {
      if (userRoles.includes('Prueba')) {
        this.router.navigate(['/cliente/genero-lista']);
      } else if(userRoles.includes('Admin')) {
        this.router.navigate(['admin/menu-admin-genero'])
      }else{

        console.error('User does not have the required role for this action');
      }
    }
}

navigateToRegistroDeUsuario() {
  const userRoles = this.authService.getRoles();
  console.log(userRoles);

  if(userRoles && userRoles.length > 0){
    if (userRoles.includes('Prueba')) {
      this.router.navigate(['cliente/user-page']);
    } else if(userRoles.includes('Admin')) {
      this.router.navigate(['admin/user-page'])
    }else{

      console.error('User does not have the required role for this action');
    }
}
}
navigateToBuscarAlbumes() {
  const userRoles = this.authService.getRoles();
  console.log(userRoles);

  if (userRoles && userRoles.length > 0) {
     if (userRoles.includes('Prueba')) {
  this.router.navigate(['/cliente/album-lista']);
     }else if(userRoles.includes('Admin')){
      this.router.navigate(['/admin/menu-admin-album'])
     }else{
      console.error('User does not have the required role for this action');
     }
}}

navigateToMusicaList() {

  const userRoles = this.authService.getRoles();
  console.log(userRoles);

  if (userRoles && userRoles.length > 0) {
    if (userRoles.includes('Prueba')) {
 this.router.navigate(['/cliente/menu']);
    }else if(userRoles.includes('Admin')){
     this.router.navigate(['/admin/menu-admin'])
    }else{
     console.error('User does not have the required role for this action');
    }
}

}
}
