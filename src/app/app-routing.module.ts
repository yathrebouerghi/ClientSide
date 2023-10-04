import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { EtablissementComponent } from './views/etablissement/etablissement.component';
import { EquipementComponent } from './views/equipement/equipement.component';
import { GestionAdmPeaComponent } from './views/gestion-adm-pea/gestion-adm-pea.component';
import { InspectionComponent } from './views/inspection/inspection.component';
import { RepartionEleveComponent } from './views/repartion-eleve/repartion-eleve.component';
import { RessourceHumaineComponent } from './views/ressource-humaine/ressource-humaine.component';
import { EspaceComponent } from './views/espace/espace.component';
import { InfrastructureComponent } from './views/infrastructure/infrastructure.component';
import { ProfileDirComponent } from './views/profile-dir/profile-dir.component';
import { ListPersonnelsComponent } from './views/personnel/list-personnels/list-personnels.component';

const routes: Routes = [

{path:'login',
component:LoginComponent,
},
{path:'profile',
component:ProfileComponent,
},
{path:'etab',
component:EtablissementComponent,
},
{path:'infra',
component:InfrastructureComponent,
},
{path:'equipement',
component:EquipementComponent,
},
{path:'adm',
component:GestionAdmPeaComponent,
},
{path:'inspection',
component:InspectionComponent,
},
{path:'rapartElev',
component:RepartionEleveComponent,
},
{path:'rh',
component:RessourceHumaineComponent,
},
{path:'espace',
component:EspaceComponent,
},
{path:'profileD',
component:ProfileDirComponent,
},
{
  path: 'personnel',
  children:[
    {
      path: 'liste',
      component:ListPersonnelsComponent,
    },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
