import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuClienteComponent } from './front-cliente/menu-cliente/menu-cliente.component';

import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AlbumListarAdminComponent } from './admin/album-listar-admin/album-listar-admin.component';
import { EditarAlbumComponent } from './admin/editar-album/editar-album.component';
import { EditarGeneroComponent } from './admin/editar-genero/editar-genero.component';
import { FormAlbumComponent } from './admin/form-album/form-album.component';
import { MenuAdminAlbumComponent } from './admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminCancionComponent } from './admin/menu-admin-cancion/menu-admin-cancion.component';
import { MenuAdminGeneroComponent } from './admin/menu-admin-genero/menu-admin-genero.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { MostrarRecomendarComponent } from './admin/mostrar-recomendar/mostrar-recomendar.component';
import { TrackEnAlbumListarComponent } from './admin/track-en-album-listar/track-en-album-listar.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { MenuClienteAlbumComponent } from './front-cliente/menu-cliente-album/menu-cliente-album.component';
import { MenuClienteCancionComponent } from './front-cliente/menu-cliente-cancion/menu-cliente-cancion.component';
import { MenuClienteCancionDetalleComponent } from './front-cliente/menu-cliente-cancion-detalle/menu-cliente-cancion-detalle.component';

const routes: Routes = [
  { path: 'cliente/album-lista', component: AlbumListarComponent },
  {path: 'cliente/album-lista/:id', component: TrackDeAlbumComponent},
  { path: 'cliente/genero-lista', component: GeneroListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cliente/recomendar-lista', component: RecomendarListaComponent },
  {path: 'recomendar-lista', component: MostrarRecomendarComponent},
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'usuario-votante-list', component: UsuarioVotanteListComponent },
  { path: 'voto-lista', component: VotoListaComponent },
  {path: 'registroUsuario', component: RegistrarUsuarioComponent},
  {path: 'cliente/menu', component: MenuClienteComponent},
{path: 'loginAdmin', component: LoginAdminComponent},
{ path: 'cliente/menu-cliente-album', component: MenuClienteAlbumComponent},
{ path: 'cliente/menu-cliente-cancion/:id', component:MenuClienteCancionComponent},
{ path: 'cliente/menu-cliente-cancion-detalle/:id', component:MenuClienteCancionDetalleComponent},
  {path: '', component: LoginClienteComponent},
  {path: 'cliente/user-page', component: UserPageComponent},
  {path: 'admin/editar-album/:id', component: EditarAlbumComponent},
  {path: 'admin/editar-genero/:id', component: EditarGeneroComponent},
  {path: 'admin/agregar-album', component: FormAlbumComponent},
  {path: 'admin/album-listar-admin', component: AlbumListarAdminComponent},
  {path: 'admin/menu-admin-genero', component: MenuAdminGeneroComponent},
  {path: 'admin/menu-admin-album', component: MenuAdminAlbumComponent},
  {path: 'admin/menu-admin', component: MenuAdminComponent},
  {path: 'admin/album-lista/:id', component: TrackEnAlbumListarComponent},
  {path: 'admin/menu-cliente-cancion-detalle/:id', component: MenuAdminCancionComponent},
  {path: 'admin/user-page', component: AdminPageComponent},
  // Si se ingresa una ruta no existente, redirecciona a 'home'
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
