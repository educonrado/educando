import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
//Forms
import { ReactiveFormsModule } from "@angular/forms";
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { ControlesComponent } from './shared/controles/controles.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Page404Component } from './shared/page404/page404.component';
//Environment
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ControlesComponent,
    GastosComponent,
    DashboardComponent,
    FooterComponent,
    Page404Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
