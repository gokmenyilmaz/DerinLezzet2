import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';



@Injectable()
export class EkipmanService {

    constructor(private afDb: AngularFireDatabase) {}

    haftaVerileriniGetir(_yil: number, _ay: number, _pazartesiKey: number) {

        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;
        return this.afDb.object(yol);
    }

    haftaVeriKaydet(_yil: number, _ay: number, _pazartesiKey: number, _haftaData: any) {
        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;

        console.log(_haftaData);

        return this.afDb.object(yol).set(_haftaData);

    }


}