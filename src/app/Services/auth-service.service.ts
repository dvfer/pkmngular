import { Injectable } from '@angular/core';
import { GoogleAuthProvider, UserInfo } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor( public auth: AngularFireAuth ) {}

/**
 * Provide Google authentification
 */
  async logIn(){
    await this.auth.signInWithPopup(new GoogleAuthProvider())
  }
/**
 * Log out the current user authentificated
 */
  async logOut(){
    try {
      await this.auth.signOut()
    }
    catch (error) {
      console.log(error)
    }
  }
/**
 * Watch user info.
 *
 * @returns An observable with the user info or null
 *
 */

  public get getObservableCurrentUser():Observable < UserInfo | null >{
    return this.auth.user
  }
}
