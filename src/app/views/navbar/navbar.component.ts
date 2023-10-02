import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn=false;
  user:any;
  constructor(public _service:AuthService,private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = this._service.isLoggedIn();
    this.user = this._service.getUser();
    this._service.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this._service.isLoggedIn();
      this.user = this._service.getUser();
    });
  }

  public logout(){
    this._service.logout();
    this.router.navigate(['/login'])
    this._service.loginStatusSubject.next(false);
  }
}
