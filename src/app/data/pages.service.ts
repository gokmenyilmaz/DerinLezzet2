import { Injectable } from "@angular/core";
import { mainslideJson, gorsellerJson, kisiyeOzelEkipmanJson, kurumaOzelEkipmanJson } from "./pages.data"

@Injectable()
export class PagesService {


    constructor() { }


    getMainSlideImages(imageFolder: string): any {
        let gorselObj = JSON.parse(mainslideJson);

        for (let item of gorselObj) {
            item.image = imageFolder + item.image;
        }

        return gorselObj;

    }


    getGorseller(imageFolder: string) {
        let gorselObj = JSON.parse(gorsellerJson);

        for (let item of gorselObj) {
            item.image = imageFolder + item.image;
        }

        return gorselObj;

    }

    getKisiyeOzelEkipmanlar(imageFolder: string) {
        let gorselObj = JSON.parse(kisiyeOzelEkipmanJson);

        for (let item of gorselObj) {
            item.image = imageFolder + item.image;
        }

        return gorselObj;

    }

    getKurumaOzelEkipmanlar(imageFolder: string) {
        let gorselObj = JSON.parse(kurumaOzelEkipmanJson);

        for (let item of gorselObj) {
            item.image = imageFolder + item.image;
        }

        return gorselObj;

    }

}