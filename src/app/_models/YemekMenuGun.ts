import {YemekMenuItem} from './YemekMenuItem'
export class YemekMenuGun {
    constructor(
        public Tarih: string,
        public GunAd: string,
        public FiyatlarGorunsunMu:boolean,
        public ToplamFiyatGorunsunMu:boolean,

        public ToplamFiyat:number,
        public YemekMenuItems: YemekMenuItem[],
      
        public GunBaslik:string,
        public image:string,

        public Aciklama:string,
        public SalataMenuItems: YemekMenuItem[],
        public ToplamFiyatSalata:number

    ) {
    }
}