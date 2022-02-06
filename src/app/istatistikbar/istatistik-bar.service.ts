import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable()
export class IstatistikBarService {

     constructor(private afDb: AngularFireDatabase) {}


    istatistikGetir(ref: string) {
        var yol = ref;
        return this.afDb.object<any>(yol);
    }

    kaydet(ref: string, istatistik: any) {
        var yol = ref;
        return this.afDb.object(yol).set(istatistik);

    }


}