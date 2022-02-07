import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import {User} from "./_models/User";


import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFireDatabase } from '@angular/fire/compat/database';


import firebase from '@firebase/app-compat';




@Injectable() 
export class AppGlobalsService {

  public userPhotoURL="";
  public _userInfo:any;


  constructor(private auth: AngularFireAuth) {  }

  async signInToggleWithGoogle() {

    if(this._userInfo){
      let cev=await this.auth.signOut();
      this._userInfo=null;
      return;
    }

    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    this._userInfo=user.additionalUserInfo.profile;
    this.userPhotoURL=this._userInfo.picture;

  }

  

}