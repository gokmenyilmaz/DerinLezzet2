import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { FigureItem } from './resim-galeri.component';



@Injectable()
export class ResimGaleriService {

 constructor(private afDb: AngularFireDatabase) {}


    resimleriGetir(ref: string) {

        var yol = ref;
        return this.afDb.list<FigureItem>(yol);
    }

    kaydet(ref: string, galeri: any) {
        var yol = ref;
        return this.afDb.object(yol).set(galeri);

    }


}