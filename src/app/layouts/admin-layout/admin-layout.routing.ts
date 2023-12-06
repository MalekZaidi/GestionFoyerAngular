import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { BlocsComponent } from './blocs-layout/blocs/blocs.component';
import { AfficherBlocsComponent } from './blocs-layout/afficher-blocs/afficher-blocs.component';
import { ModifierBlocsComponent } from './blocs-layout/modifier-blocs/modifier-blocs.component';
import { SupprimerBlocsComponent } from './blocs-layout/supprimer-blocs/supprimer-blocs.component';
import { AjouterBlocsComponent } from './blocs-layout/ajouter-blocs/ajouter-blocs.component';
import { AffectationBlocsComponent } from './blocs-layout/affectation-blocs/affectation-blocs.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'admin', component: HomeComponent },
    { path: 'blocs', component: BlocsComponent }, 
    { path: 'blocs/afficher/:idBloc', component: AfficherBlocsComponent }, 
    { path: 'blocs/modifier/:idBloc', component: ModifierBlocsComponent }, 
    { path: 'blocs/supprimer', component: SupprimerBlocsComponent }, 
    { path: 'blocs/ajouter', component: AjouterBlocsComponent }, 
    { path :'blocs/affecterFoyer/:idBloc',component: AffectationBlocsComponent },

];
