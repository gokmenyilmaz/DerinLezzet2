import { TestBed } from '@angular/core/testing';
import { HaftalikMenuComponent } from './haftalik-menu.component';
import { FormsModule } from '@angular/forms';
import { HaftalikMenuService } from './haftalik-menu.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppGlobalsService } from "../globals";


export const config = {
  apiKey: "AIzaSyDNmRF1JtItI0MiLhIjnJEN9nqboi4mWzM",
  authDomain: "derinlezzetdb.firebaseapp.com",
  databaseURL: "https://derinlezzetdb.firebaseio.com",
  storageBucket: "derinlezzetdb.appspot.com",
  messagingSenderId: "310765295981"
};

describe('haftalik-menu pazartesi testi', () => {

  let comp: HaftalikMenuComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HaftalikMenuComponent
      ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFireAuthModule

      ],
      providers: [
        HaftalikMenuService,
        AppGlobalsService,
        AngularFireAuthModule

      ]

    }).compileComponents();

    const fixture = TestBed.createComponent(HaftalikMenuComponent);
    comp = fixture.componentInstance;

  });

  it('02/06/2017', () => {
    comp.yil = 2017;
    comp.ay_onikili = 6;
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 2));
    expect(comp.pazartesiKey).toBe(29);

  });
 
  it('06/06/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 6;
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 6));
    expect(comp.pazartesiKey).toBe(5);

  });

  it('29/06/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 6;
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 29));
    expect(comp.pazartesiKey).toBe(26);

  });

  it('03/07/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 7;
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili-1, 3));
    expect(comp.pazartesiKey).toBe(3);

  });

   it('06/08/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 8;
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 6));
    expect(comp.pazartesiKey).toBe(31);

  });

  it('11/08/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 8;
    comp.varsayilanTarihAyarla(new Date(2017,comp.ay_onikili -1, 11));
    expect(comp.pazartesiKey).toBe(7);

  });

// haftasonu
   it('12/08/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 8;
    
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 11));
    expect(comp.pazartesiKey).toBe(7);

  });

  it('25/06/2017 de', () => {

    comp.yil = 2017;
    comp.ay_onikili = 6;
    
    comp.varsayilanTarihAyarla(new Date(2017, comp.ay_onikili -1, 25));
    expect(comp.pazartesiKey).toBe(19);

  });


   it('fonksiyon 25/06/2017 de', () => {
      comp.ay_onikili=6;
      var _date=new Date(2017, comp.ay_onikili -1, 25);
    
      var x=comp.getirPazartesiKeyGunden(_date);
       expect(x).toBe(19);
    });


   it('fonksiyon 1/1/2017 de', () => {
      comp.ay_onikili=1;
      var _date=new Date(2017, comp.ay_onikili -1, 1);
    
      var x=comp.getirPazartesiKeyGunden(_date);
       expect(x).toBe(26);
    });

   it('fonksiyon 25/6/2017 de', () => {
      comp.ay_onikili=6;
      var _date=new Date(2017, comp.ay_onikili -1,25);
    
      var x=comp.getirPazartesiKeyGunden(_date);
       expect(x).toBe(19);
    });

});
