import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPostBackendService } from '../autenticacionYRegistro/token-post-backend.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  userInfo: any;
  constructor(private postBackendAuthService: TokenPostBackendService, private router: Router){}
  ngOnInit(): void {



    const token = localStorage.getItem('jwtToken') || '';

    this.postBackendAuthService.sendPostRequestWithToken(token)
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




