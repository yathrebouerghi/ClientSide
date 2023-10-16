import { Component, OnInit } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissement';
import { NomenclatureCommune } from 'src/app/models/nomenclatureCommune';
import { NomenclatureDelegation } from 'src/app/models/nomenclatureDelegation';
import { NomenclatureDiplome } from 'src/app/models/nomenclatureDiplome';
import { NomenclatureEtatEtablissement } from 'src/app/models/nomenclatureEtatEtablissement';
import { NomenclatureGouvernorat } from 'src/app/models/nomenclatureGouvernorat';
import { NomenclatureNiveauEtude } from 'src/app/models/nomenclatureNiveauEtude';
import { NomenclatureSituationFamiliale } from 'src/app/models/nomenclatureSituationFamiliale';
import { NomenclatureTypeEtablissement } from 'src/app/models/nomenclatureTypeEtablissement';
import { AuthService } from 'src/app/services/auth.service';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit{

  etablissement: Etablissement = new Etablissement();
  currentUser:any;
  codeEtab:any;

  typesEtablissement: NomenclatureTypeEtablissement[] =[]
  selectedCodeType: string = "";
  selectedLibeType: string = "";

  gouvernorats:NomenclatureGouvernorat[]=[]
  delegations:NomenclatureDelegation[]=[]
  selectedCodeDelegation: string = "";
  selectedLibeDelegation: string = "";
  selectedLibeDelegationFond: string = "";
  selectedCodeDelegationFond: string = "";
  
  etatEtablissements:NomenclatureEtatEtablissement[]=[]
  selectedCodeEtat: string = "";
  selectedLibeEtat: string = "";

  diplomes:NomenclatureDiplome[]=[]
  niveauEtd:NomenclatureNiveauEtude[]=[]
  SituF:NomenclatureSituationFamiliale[]=[]
  communes:NomenclatureCommune[]=[]
  selectedCodeComm: string = "";
  selectedLibeComm: string = "";

  selectedCodeGenre:string = "";
  selectedLibeGenre:string = "";
  constructor(private _service:EtablissementService,private _login:AuthService,private _personnel:PersonnelService){}
  ngOnInit(): void {

    this._service.getGouv().subscribe((data:any)=>{
      this.gouvernorats = data
    })

    this._service.getDiplome().subscribe((data:any)=>{
      this.diplomes = data
    })
    this._service.getNivEtd().subscribe((data:any)=>{
      this.niveauEtd = data
    })
    this._service.getSitF().subscribe((data:any)=>{
      this.SituF = data
      console.log(data)
    })
  
    this.currentUser = this._login.getCurrentUser().subscribe((data:any)=>{
      this.codeEtab = data.codeEtab;
      console.log(this.codeEtab)
    })


    this._service.GetEtablissement(this.codeEtab).subscribe((data:any)=>{
      this.etablissement  = data;
      this.selectedCodeType = this.etablissement.codeTypeEtab;
      this.selectedCodeDelegation = this.etablissement.codeDele;
      this.selectedCodeEtat = this.etablissement.codeEtatEtab;
      this.selectedCodeComm = this.etablissement.codeComm;
      this.selectedCodeGenre = this.etablissement.codeGenrFond;
      this.selectedCodeDelegationFond = this.etablissement.codeDeleFond;
      this._service.getDele().subscribe((data:any)=>{
        this.delegations = data;
        this.delegations.forEach((dele: NomenclatureDelegation) => {
          if(this.selectedCodeDelegation == dele.codeDele){
            this.selectedLibeDelegation = dele.libeDele;
          }
          if(this.selectedCodeDelegationFond == dele.codeDele){
            this.selectedLibeDelegationFond = dele.libeDele;
          }
        })
      })
      this._service.getTypeEtab().subscribe((data:any)=>{
        this.typesEtablissement = data
        this.typesEtablissement.forEach((type: NomenclatureTypeEtablissement) => {
          if(this.selectedCodeType == type.codeTypeEtab){
            this.selectedLibeType = type.libeTypeEtab;
          }
        })
      })
      this._service.getEtatEtab().subscribe((data:any)=>{
        this.etatEtablissements = data;
        this.etatEtablissements.forEach((etat: NomenclatureEtatEtablissement) => {
          if(this.selectedCodeEtat == etat.codeEtatEtab){
            this.selectedLibeEtat = etat.libeEtatEtab;
            console.log(this.selectedLibeEtat)
          }
        })
      })
      this._service.getComm().subscribe((data:any)=>{
        this.communes = data
        this.communes.forEach((comm: NomenclatureCommune) => {
          if(this.selectedCodeComm == comm.codeComm){
            this.selectedLibeComm = comm.libeComm;
          }
        })
      })
      this._personnel.getGenreByCode(this.selectedCodeGenre).subscribe((data:any)=>{
        this.selectedLibeGenre = data.libeGenr;
      }
      )
      console.log(this.etablissement)
    })
  }
}
