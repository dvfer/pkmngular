import { Injectable } from '@angular/core';
import { GoogleAuthProvider, UserInfo } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor( public auth: AngularFireAuth ) {
    this.getObservableCurrentUser.subscribe(( value: UserInfo | null) => {
      const user: UserInfo | null = value;
      console.log(user);
    } )
  }
/**
 * Returns PREGUNTAR QUE PONER
 * @returns
 */
  async logIn(){
    return await this.auth.signInWithPopup(new GoogleAuthProvider())
  }

  async logOut(){
    return await this.auth.signOut()
  }
/**
 * Returns PREGUNTAR PQ LO UNICO QUE SE ME OCURRE ES REDUNDANTE CON LO DE ABAJO.
 *
 * @returns An observable with the user info or null
 *
 */
  public get getObservableCurrentUser():Observable < UserInfo | null > {
    return (this.auth.user);
  }
  onInit(){
  }
}
