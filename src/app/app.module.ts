import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';

import { SharedModule, MyW3CarouselComponent, MyTabComponent,MyHighLightDirective } from './shared/index';

import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './_home/home.component';
import { MainSlideComponent } from './mainslide/main-slide.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';


import { AlakartComponent } from './alakart/alakart.component';
import { AlakartMenuComponent } from './alakart/alakart-menu/alakart-menu.component';

import { HaftalikMenuComponent } from './haftalikmenu/haftalik-menu.component';
import { ResimGaleriComponent } from './galeri/resim-galeri.component';
import { IstatistikBarComponent } from './istatistikbar/istatistik-bar.component';
import { FooterBarComponent } from './footer/footer-bar.component';
import { EkipmanComponent } from './ekipmanlar/ekipman.component';




import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppGlobalsService} from "./globals";

import { LOCALE_ID } from '@angular/core';


@NgModule({
  imports:
  [
    BrowserModule, 
    SharedModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations:
  [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    MainSlideComponent,
    HakkimizdaComponent,
    
    AlakartComponent,
    AlakartMenuComponent,
    HaftalikMenuComponent,
    ResimGaleriComponent,
    IstatistikBarComponent,
    FooterBarComponent,
    EkipmanComponent,

  ],
  bootstrap: [AppComponent],
  providers:
  [
    AppGlobalsService,
    { provide: LOCALE_ID, useValue: "tr-TR" }
  ]
})
export class AppModule { }
