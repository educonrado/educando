import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { Page404Component } from './shared/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'gastos', component: GastosComponent, canActivate:[AuthGuard] },
  { path: '**', pathMatch:'full' , redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
