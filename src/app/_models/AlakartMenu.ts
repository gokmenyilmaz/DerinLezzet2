import {AlakartMenuItem} from './AlakartMenuItem'
export class AlakartMenu {
    constructor(
        public Tarih: string,
        public MenuAd: string,

        public ToplamFiyat:number,

        public AlakartMenuItems: AlakartMenuItem[]

    ) {}
}
