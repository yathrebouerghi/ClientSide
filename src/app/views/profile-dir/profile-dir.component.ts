import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DirecteurService } from 'src/app/services/directeur.service';

@Component({
  selector: 'app-profile-dir',
  templateUrl: './profile-dir.component.html',
  styleUrls: ['./profile-dir.component.css']
})
export class ProfileDirComponent implements OnInit{

  //afficher detail directeur 
user:any;
  //modifier profile
  isupdated = false;
  directeur:any;
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
  });
  constructor(private formBuilder: FormBuilder,private _service:DirecteurService,private login:AuthService){}
  
  ngOnInit(): void {
    this.user=this.login.getUser();
    this.id = this.user.id
    console.log(this.user)
    this.isupdated = true;

    this._service.getDirecteur(this.id).subscribe(
      (data:any) =>{
        this.directeur = data;
        console.log(this.directeur)
        this.currentPass = this.directeur.pwd
      }
    )

    this.form = this.formBuilder.group({
      login: [''],
      pwd: ['', Validators.required],
      nom: [''],
      prenom: [''],
      codeEtab: [''],
      role: [''],
      etat: [''],
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
      this.directeur.pwd = this.pwd;
      this._service.modifierPWD(this.id,this.directeur).subscribe(
        (data:any) =>{
          this.isupdated = true;
          console.log("updated")
          window.location.reload();
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
}
