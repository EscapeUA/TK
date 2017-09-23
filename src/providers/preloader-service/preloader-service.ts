import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class PreloaderService {
    constructor(private loadingCtrl: LoadingController) {}

    public presentLoadingIntro() {
        let introLoading = this.loadingCtrl.create({});
        return introLoading;
    }

    public presentPageLoading() {
        let pageLoading = this.loadingCtrl.create({
            duration: 200
        });

        pageLoading.present();
    }
}