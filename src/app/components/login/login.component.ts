import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authForm: FormGroup;  
  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadForm();
  }


  private loadForm() {
    this.authForm = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  loginWithEmailPasword(value){
    this._auth.signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
      this._router.navigate(['/dashboard']);
    });
  }

}
