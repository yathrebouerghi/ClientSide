import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of, tap } from 'rxjs';

let URL = "https://localhost:7051/api" 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  public generateToken(loginData:any){
    return this.http.post(`${URL}/Token`,loginData,{ responseType: 'text' });
  }

  
  public getCurrentUser() {
    const storedUser = localStorage.getItem('currentUser'); 
    const login = this.getUser().login
    if (storedUser) {
      // Return the stored user data as an observable
      return of(JSON.parse(storedUser));
    } else {
      // If the user data is not stored, make a request to the API
      return this.http.get(`${URL}/SecuriteDirecteur/login/${login}`).pipe(
        tap((user) => {
          // Store the user data in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
        })
      );
    }
  }

  public loginUser(token: string) {
    localStorage.setItem('token', token);
    
    // Update the user data in local storage
    const currentUser = { username: 'example' };
    this.setUser(currentUser);
    
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if ( tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.clear();
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  //user Detail
  public setUser(user: any){
    localStorage.setItem('user',JSON.stringify(user));
    
  }
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  
}
