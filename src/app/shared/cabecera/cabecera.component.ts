import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout(){
    console.log('click logout');
    this._authService.signOut();
  }

}
