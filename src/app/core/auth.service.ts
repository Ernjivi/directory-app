import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";

import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {
    this.user = this.afAuth.authState;
  }

  oAuthLogin(provider: firebase.auth.AuthProvider): void{
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout(): void{
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/']));
  }

  googleLogin(): void{
    let provider = new firebase.auth.GoogleAuthProvider();
    this.oAuthLogin(provider);
  }

}
