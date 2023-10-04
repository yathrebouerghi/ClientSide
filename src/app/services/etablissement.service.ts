import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NomenclatureTypeEtablissement } from '../models/nomenclatureTypeEtablissement';
import { NomenclatureGouvernorat } from '../models/nomenclatureGouvernorat';
import { NomenclatureDelegation } from '../models/nomenclatureDelegation';
import { NomenclatureEtatEtablissement } from '../models/nomenclatureEtatEtablissement';
import { NomenclatureCommune } from '../models/nomenclatureCommune';
import { NomenclatureDiplome } from '../models/nomenclatureDiplome';
import { NomenclatureNiveauEtude } from '../models/nomenclatureNiveauEtude';
import { NomenclatureSituationFamiliale } from '../models/nomenclatureSituationFamiliale';
let baseUrl = "https://localhost:7051/api/NomenclatureEtablissements"
let URL = "https://localhost:7051/api/Etablissement"
@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private http:HttpClient) { }

  getGouv() {
    return this.http.get<NomenclatureGouvernorat[]>(`${URL}/gouvernorat`);
  }
  getDele() {
    return this.http.get<NomenclatureDelegation[]>(`${URL}/delegation`);
  }
  getComm() {
    return this.http.get<NomenclatureCommune[]>(`${URL}/commune`);
  }
  getTypeEtab() {
    return this.http.get<NomenclatureTypeEtablissement[]>(`${URL}/typesEtablissements`);
  }
  getEtatEtab() {
    return this.http.get<NomenclatureEtatEtablissement[]>(`${URL}/EtatsEtablissements`);
  }
  getNivEtd() {
    return this.http.get<NomenclatureNiveauEtude[]>(`${URL}/NiveauEtude`);
  }
  getDiplome() {
    return this.http.get<NomenclatureDiplome[]>(`${URL}/Diplomes`);
  }
  getSitF() {
    return this.http.get<NomenclatureSituationFamiliale[]>(`${URL}/SituationFamiliales`);
  }
  GetEtablissement(idEtablissement:any){
    return this.http.get(`${baseUrl}/${idEtablissement}`);
  }
}
