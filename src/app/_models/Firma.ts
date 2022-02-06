import {MesajWeb} from './MesajWeb'
export class Firma {
    constructor(
        public FirmaAd: string,
        public Telefon: string,
        public Email: string,
        public Adres:string,
    
        public GpsKonumEnlem:string,
        public GpsKonumBoylam:string,

        public GelenMesajlar:MesajWeb[]

    ){ }
}


