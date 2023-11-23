import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class ObtenerRolesService {

  constructor(private jwtHelper: JwtHelperService) { }

  getRoles(): string[]{

    const token = localStorage.getItem('jwtToken') || '';
    console.log(token);
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log(decodedToken);

    if (decodedToken && decodedToken.authorities) {
      const authoritiesArray = Array.isArray(decodedToken.authorities)
        ? decodedToken.authorities.map((authorityObj: { authority: any; }) => authorityObj.authority)
        : [decodedToken.authorities.authority];

      console.log(authoritiesArray);
      return authoritiesArray;
    } else {
      return [];
    }
}}
