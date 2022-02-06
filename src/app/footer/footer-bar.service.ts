import { Component,Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable()
export class FooterBarService {


    constructor(private afDb: AngularFireDatabase) {}
    footerDataGetir() {
        var yol = `/Firma`;
        return this.afDb.object<any>(yol);
    }

    kaydet(data:any) {
        var yol = `/Firma`;

        delete data['$key'];
        delete data['$exists'];

        return this.afDb.object(yol).set(data);

    }

    mesajGonder()
    {
        alert("Mesajınız iletildi");
    }

}