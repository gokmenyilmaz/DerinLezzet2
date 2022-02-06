import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import {AlakartMenu} from '../_models/AlakartMenu';
import {AlakartMenuItem} from '../_models/AlakartMenuItem';


@Injectable()
export class AlakartService {

    constructor(private afDb: AngularFireDatabase) {}

    alakartVerileriniGetir() {

        var yol = `/AlakartMenu`;
        return this.afDb.list<AlakartMenu>(yol);
    }

    alakartVeriKaydet(data:AlakartMenu[] ) {
        var yol = `/AlakartMenu`;
        delete data['$key'];
        delete data['$exists'];

        return this.afDb.object(yol).set(data);

    }


}