import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let baseUrl = "https://localhost:7051/api"
@Injectable({
  providedIn: 'root'
})
export class DirecteurService {

  constructor(private http:HttpClient) { }

  public getDirecteur(dId: any){
    return this.http.get(`${baseUrl}/SecuriteDirecteur/${dId}`)
  }

  modifierPWD(id:any,directeur:any){
    return this.http.put(`${baseUrl}/SecuriteDirecteur/${id}`, directeur);
  }
}
