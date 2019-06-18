import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _auth: AuthService,
    private _router: Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._auth.user$.pipe(
      take(1),
      map(user=> !!user),
      tap(loggedIn=>{
        if (!loggedIn) {
          console.log("access denied");
          this._router.navigate(['/login']);
        }
      })
    )
  }
  
  
}
