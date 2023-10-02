import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { EtablissementComponent } from './views/etablissement/etablissement.component';
import { EquipementComponent } from './views/equipement/equipement.component';
import { EspaceComponent } from './views/espace/espace.component';
import { InspectionComponent } from './views/inspection/inspection.component';
import { InfrastructureComponent } from './views/infrastructure/infrastructure.component';
import { GestionAdmPeaComponent } from './views/gestion-adm-pea/gestion-adm-pea.component';
import { RepartionEleveComponent } from './views/repartion-eleve/repartion-eleve.component';
import { RessourceHumaineComponent } from './views/ressource-humaine/ressource-humaine.component';
import { ProfileDirComponent } from './views/profile-dir/profile-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    EtablissementComponent,
    EquipementComponent,
    EspaceComponent,
    InspectionComponent,
    InfrastructureComponent,
    GestionAdmPeaComponent,
    RepartionEleveComponent,
    RessourceHumaineComponent,
    ProfileDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
