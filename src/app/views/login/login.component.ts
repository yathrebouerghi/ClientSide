import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directeur } from 'src/app/models/directeur';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:Directeur = new Directeur()
  errorMessage: string | undefined;
  loginData={
    login: '',
    pwd: ''
  };

  currentUser: any;
  isLoggedIn = false;
  constructor(private _service:AuthService,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if (this._service.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  formSubmit(){
    this._service.generateToken(this.loginData).subscribe(
      (data:any)=> {
        console.log("success");
        console.log(data);
        this._service.loginUser(data.token);
        this._service.setUser(this.loginData);
        this.isLoggedIn = true;
        this.router.navigate(['profile']);
      },
      (error)=>{
            console.log('error');
            console.log(error);
            this.errorMessage = "Username ou password incorrect.";
      }); 
  }
  
  /* login(email:any){
    this._service.getCurrentUser(email).subscribe((data:any)=>{
      this.user = data;
      this.router.navigate(['profile']);
    })
  } */

}
