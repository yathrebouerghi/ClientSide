import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonnelPersonnel } from '../models/personnelPersonnel';
import { NomenclatureGenre } from '../models/nomenclatureGenre';
import { NomenclatureNiveauEtude } from '../models/nomenclatureNiveauEtude';
import { NomenclatureSituationFamiliale } from '../models/nomenclatureSituationFamiliale';
import { NomenclatureGrade } from '../models/nomenclatureGrade';
import { NomenclatureSituPro } from '../models/nomenclatureSituPro';
import { NomenclatureFonction } from '../models/nomenclatureFonction';

let baseUrl = "https://localhost:7051/api/PersonnelPersonnels"

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getDetailPersonnel(id:any){
    return this.http.get<PersonnelPersonnel[]>(`${baseUrl}/${id}`);
  }
  getPersonnelByCode(codeEtab:any){
    return this.http.get<PersonnelPersonnel[]>(`${baseUrl}/personnels/${codeEtab}`);
  }

  
  getGenreByCode(codeGnere:any){
    return this.http.get<NomenclatureGenre>(`${baseUrl}/genre/${codeGnere}`);
  }
  getNiveauEtdByCode(codeNivEtd:any){
    return this.http.get<NomenclatureNiveauEtude>(`${baseUrl}/niveau/${codeNivEtd}`);
  }
  getSituFamiByCode(codeSitF:any){
    return this.http.get<NomenclatureSituationFamiliale>(`${baseUrl}/situFami/${codeSitF}`);
  }
  getGradeByCode(codeGrade:any){
    return this.http.get<NomenclatureGrade>(`${baseUrl}/grade/${codeGrade}`);
  }
  getQualiteByCode(codeQualite:any){
    return this.http.get<NomenclatureGrade>(`${baseUrl}/qualite/${codeQualite}`);
  }
  getsitProfByCode(codesirProf:any){
    return this.http.get<NomenclatureSituPro>(`${baseUrl}/sitProf/${codesirProf}`);
  }
  getfonctionByCode(codeFonction:any){
    return this.http.get<NomenclatureFonction>(`${baseUrl}/fonction/${codeFonction}`);
  }
}
