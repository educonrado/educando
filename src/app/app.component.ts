import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'admin';
  public isLogged: boolean = false;
  constructor(
    private _authService: AuthService
  ){
    this.isLogged = this._authService.authenticathed();
  }
}
