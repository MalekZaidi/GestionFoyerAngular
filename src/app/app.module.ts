import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup' // to be added
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular-notifications';
import { AppComponent } from './app.component';
import { ModifierBlocsComponent } from './layouts/admin-layout/blocs-layout/modifier-blocs/modifier-blocs.component';
import { BlocsComponent } from './layouts/admin-layout/blocs-layout/blocs/blocs.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantLayoutModule } from './layouts/etudiant-layout/etudiant-layout.module';
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";
import { AjouterBlocsComponent } from './layouts/admin-layout/blocs-layout/ajouter-blocs/ajouter-blocs.component';
import { AffectationBlocsComponent } from './layouts/admin-layout/blocs-layout/affectation-blocs/affectation-blocs.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    AppRoutingModule,
    EtudiantLayoutModule,
    ReactiveFormsModule,
    NgToastModule,
    AdminLayoutModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AjouterBlocsComponent,
    ModifierBlocsComponent,
    BlocsComponent,
    AffectationBlocsComponent

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
