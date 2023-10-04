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
  selectedType:any;
  gouvernorats:NomenclatureGouvernorat[]=[]
  delegations:NomenclatureDelegation[]=[]
  etatEtablissements:NomenclatureEtatEtablissement[]=[]
  diplomes:NomenclatureDiplome[]=[]
  niveauEtd:NomenclatureNiveauEtude[]=[]
  SituF:NomenclatureSituationFamiliale[]=[]
  communes:NomenclatureCommune[]=[]

  constructor(private _service:EtablissementService,private _login:AuthService){}
  ngOnInit(): void {

    this._service.getTypeEtab().subscribe((data:any)=>{
      this.typesEtablissement = data
      console.log(data)
    })
    this._service.getEtatEtab().subscribe((data:any)=>{
      this.etatEtablissements = data
    })

    this._service.getDele().subscribe((data:any)=>{
      this.delegations = data
    })

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
    this._service.getComm().subscribe((data:any)=>{
      this.communes = data
      console.log(data)
    })





    this.currentUser = this._login.getCurrentUser().subscribe((data:any)=>{
      this.codeEtab = data.codeEtab;
      console.log(this.codeEtab)
    })


    this._service.GetEtablissement(this.codeEtab).subscribe((data:any)=>{
      this.etablissement  = data;
      this.selectedType = this.etablissement.codeTypeEtab
      console.log(this.etablissement)
    })
  }

}
