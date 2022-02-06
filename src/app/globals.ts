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

  async signInWithGoogle() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    console.log(user);

    
  }

  
  signOut()
  {
    this.auth.signOut();
        
    
        location.reload();
 
      
  }
}