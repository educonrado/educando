import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>
  constructor(
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _router: Router
  ) { 
    this.user$ = this._afAuth.authState.pipe(
      switchMap(user => {
        //Logged in
        if (user) {
          return this._afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async signInWithEmailAndPassword(email: string, password: string){
    const credential = await this._afAuth.auth.signInWithEmailAndPassword(email, password);
    this._router.navigate(['/dashboard']);
    console.log(this._afAuth.authState);
    return this.updateUserData(credential.user);
  }
  
  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this._afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  authenticathed (): boolean {
    return this.user$ != null;
  }

  updateUserData(user: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this._afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName
    }
    return userRef.set(data, {merge: true});
  }

  async signOut(){
    await this._afAuth.auth.signOut();
    this._router.navigate(['/']);
  }

  doRegister(value){
    return new Promise<any>((resolve, reject)=>{
      this._afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res=>{
          resolve(res);
        }, err => reject (err));
    });
  }
}
