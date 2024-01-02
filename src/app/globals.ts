import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import {User} from "./_models/User";


import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFireDatabase } from '@angular/fire/compat/database';


import firebase from '@firebase/app-compat';
import { map } from 'rxjs/operators';



@Injectable() 
export class AppGlobalsService {

  public userPhotoURL="";
  public _userInfo:any;
  public _userRole:string="";


  constructor(private auth: AngularFireAuth,private db: AngularFireDatabase) {  }

  async signInToggleWithGoogle() {

    if(this._userInfo){
      let cev=await this.auth.signOut();
      this._userInfo=null;
      return;
    }

    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    this._userInfo=user.additionalUserInfo.profile;
    this.userPhotoURL=this._userInfo.picture;
 

    let userObj=await this.getUserByEmail(this._userInfo.email);

    this._userRole=userObj==null?"user":userObj.role;
   

  }


  async getUserByEmail(email: string): Promise<any> {
    const ref = this.db.database.ref('Kullanici');

    console.log(ref.toJSON());
    const snapshot = await ref.orderByChild('email').equalTo(email).once('value');
    const users = snapshot.val();

    return users ? Object.values(users)[0] : null;
  }

}