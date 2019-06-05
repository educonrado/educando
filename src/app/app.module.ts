import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { ControlesComponent } from './shared/controles/controles.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Page404Component } from './shared/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ControlesComponent,
    GastosComponent,
    DashboardComponent,
    FooterComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
