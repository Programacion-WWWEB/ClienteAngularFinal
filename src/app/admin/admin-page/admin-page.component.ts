import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPostBackendService } from 'src/app/autenticacionYRegistro/token-post-backend.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  userInfo: any;
  constructor(private postBackendAuthService: TokenPostBackendService, private router: Router){}
  ngOnInit(): void {



    const token = localStorage.getItem('jwtToken') || '';

    this.postBackendAuthService.sendPostRequestWithTokenAdmin(token)
      .subscribe(
        (response) => {

          this.userInfo = response;
          console.log('User Info:', this.userInfo);
        },
        (error) => {
          console.error('Error fetching user info:', error);

        }
      );


  }

  logout(): void {

    localStorage.removeItem('jwtToken');


    this.router.navigate(['/home']);
  }


  }

