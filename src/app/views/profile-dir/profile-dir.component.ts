import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etablissement } from 'src/app/models/etablissement';
import { NomenclatureGouvernorat } from 'src/app/models/nomenclatureGouvernorat';
import { AuthService } from 'src/app/services/auth.service';
import { DirecteurService } from 'src/app/services/directeur.service';
import { EtablissementService } from 'src/app/services/etablissement.service';
@Component({
  selector: 'app-profile-dir',
  templateUrl: './profile-dir.component.html',
  styleUrls: ['./profile-dir.component.css']
})
export class ProfileDirComponent implements OnInit{
  //detail directeur
  currentUser:any;
  nom:any;
  prenom:any;
  //modifier profile
  isupdated = false;
  id:any;//l'id du user authentifié
  pwd:any
  currentPass:any
  currentPassword!:any

  renewPassword:any
  
  currentPasswordError: string = '';
  passwordMismatchError: string = '';

  isTrue:boolean = false
  Mismatch:boolean = true;

  form: FormGroup= new FormGroup({
    login: new FormControl(''),
    pwd: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    codeEtab: new FormControl(''),
    role: new FormControl(''),
    etat: new FormControl(''),
    currentPassword: new FormControl(''),
    renewPassword : new FormControl(''),
  });

  gouvernorats:NomenclatureGouvernorat[]=[]

  etablissement: Etablissement = new Etablissement();
  codeEtab:any;
  constructor(private formBuilder: FormBuilder,private _service:DirecteurService,private _etab:EtablissementService,private _login:AuthService,private router: Router){}
  
  ngOnInit(): void {
    
    this._login.getCurrentUser().subscribe(
      (data:any) =>{
        this.currentUser = data;
        this.nom = data.nom
        this.prenom = data.prenom
        this.currentPass = this.currentUser.pwd
        this.codeEtab = data.codeEtab;
      }
    )
    this.isupdated = true;
    this._etab.getGouv().subscribe((data:any)=>{
      this.gouvernorats = data
    })
    this.id = this.currentUser.id
    this.form = this.formBuilder.group({
      login: [''],
      pwd: ['', Validators.required],
      nom: [''],
      prenom: [''],
      codeEtab: [''],
      role: [''],
      etat: [''],
      currentPassword: ['', Validators.required],
      renewPassword: ['', Validators.required]
    })

    this._etab.GetEtablissement(this.codeEtab).subscribe((data:any)=>{
      this.etablissement  = data;
    })
  }
  get f(){  
    return this.form.controls;  
  } 

  update(){
    if (this.form.invalid) {
      return;
    }
    if(this.isTrue == true && this.Mismatch == false){
      this.currentUser.pwd = this.pwd;
      this._service.modifierPWD(this.id,this.currentUser).subscribe(
        (data) =>{
          this.isupdated = true;
          this.logout();
        }
      );
    }else{
      this.passwordMismatchError = 'Les nouveaux mots de passe ne correspondent pas.';
      this.currentPasswordError = 'Mot de passe actuel incorrect';
    }
  }

  checkCurrentPassword(event: any) {
    const currentPassword = event.target.value;
    if (currentPassword === this.currentPass) {
      this.isTrue= true
      console.log('Mot de passe correct.');
    } else {
      this.isTrue= false
      this.currentPasswordError = 'Mot de passe actuel incorrect';
      console.log('Mot de passe incorrect.');
    }
  }
  checkRenewPassword(event: any){
    const renewPassword = event.target.value;
    if(renewPassword === this.pwd){
      this.Mismatch= false
      console.log('Mot de passe conforme.');
    } else{
      this.Mismatch= true
      this.passwordMismatchError = 'Les nouveaux mots de passe ne correspondent pas.';
    }
  }

  

  public logout(){
    this._login.logout();
    this.router.navigate(['/login']);
  }
}
