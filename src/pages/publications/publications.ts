// import { BlogsDescriptionPage } from './../blogs-description/blogs-description';
// import { NewsDescriptionPage } from './../news-description/news-description';
import { CONSTANTS } from './../../config/app.constants';
import { Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { LoadService } from "../../providers/load-service/load-service";
import { DateService } from "../../providers/date-service/date-service";
import { StorageService } from "../../providers/storage-service/storage-service";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { PublicationsDescriptionPage } from "../publications-description/publications-description";
import * as moment from 'moment'

import { Publication } from "../../model/publication";

@IonicPage()
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
  providers: [LoadService, DateService, StorageService]
})
export class PublicationsPage {
  private startPageNumber: number = CONSTANTS.startPageNumber;
 
  public publicationsJson: Publication[] = [];
  private newsPaperTag: string = "газета «факти»";
  private testTag: string = "тест";
  public isSpinnerHidden: boolean;
  private scroll: any = undefined;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadService: LoadService, 
    private dateService: DateService,
    private storage: StorageService,
    private screenOrientation: ScreenOrientation,
    private events: Events,
    private toast: ToastController) {

    this.navParams.get('publicationsJson');

    this.isSpinnerHidden = !this.loadService.isConnect();

    //handling notification events
    // this.events.subscribe(CONSTANTS.receivedIdStatus, (type, data) => {
    //   switch(type) {
    //     case CONSTANTS.newsPageID: {
    //       this.navCtrl.push(NewsDescriptionPage, {'newsSelected': data});
    //       break;
    //     } case CONSTANTS.publicationsPageID: {
    //       this.navCtrl.push(PublicationsDescriptionPage, {'publicationSelected': data});
    //       break;
    //     } case CONSTANTS.blogsPageID: {
    //       this.navCtrl.push(BlogsDescriptionPage, {'blogSelected': data})
    //     }
    //   }
    // })
  }

  ionViewWillLoad() {
    this.loadView();
  }

  lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  private presentToast() {
    let disToast = this.toast.create({
      message: CONSTANTS.disconnectToastMessage,
      duration: CONSTANTS.toastDisplayTimeDuration,
      position: CONSTANTS.toastDisplayPosition
    })
    disToast.present();
  }

  public loadView() {
    this.lockScreenOrientation();
    this.publicationsJson.length = 0;
    if(this.loadService.isConnect()) {
      this.loadPublicationsPull();    
    } else {
      this.setPublicationsPull();
      this.presentToast();
    }
  }

  private loadPublicationsPull() {
    this.loadService.loadData(CONSTANTS.publicationsPageID, this.startPageNumber).subscribe((data) => {
      for(let post of data.publications) {
        if((post.tag.toLowerCase().indexOf(this.newsPaperTag) == -1)&&(post.tag.toLowerCase().indexOf(this.testTag) == -1)) {
          this.publicationsJson.push(post);
          this.storage.setSavedPublications(post);          
        }
      }
    })
    setTimeout(() => {
      this.isSpinnerHidden = true;
    }, CONSTANTS.spinnerHideTimeOutDuration)
  }

  private setPublicationsPull() {
    this.storage.getSavedPublications().then((publStored) => {
      this.publicationsJson = publStored;
    })
  }

  public loadDescription(event, publication) {
    this.navCtrl.push(PublicationsDescriptionPage, {'publicationSelected': publication});
  }

  public swipeTo(event) {
    if(event.direction == '1' || event.direction == '2') {
      this.navCtrl.parent.select(CONSTANTS.blogsPageID);
    } else {
      this.navCtrl.parent.select(CONSTANTS.newsPageID);
    }
  }

  public getLocalDate() : string {
    return this.dateService.getFullDate();
  }

  public checkDate(date) {
    let someDate = date;
    if(this.dateService.checkFullDate() + (moment().format('YYYY')).toString() == someDate) {
      return "Сьогоднi";
    } else if(this.dateService.getYesterdayDate() + (moment().format('YYYY')).toString() == someDate) {
      return "Вчора";
    } else {
      return someDate;
    }
  }

  public checkPR(pr: string | undefined) {
    if(pr == '1') return true;
    else if(pr == '0') return false;
    else return false;
  }

  // public doInfinite(infiniteScroll) {
  //   this.scroll = infiniteScroll;
  //   if(this.publicationsJson.length < CONSTANTS.publicationsJsonMaxLength) {
  //     setTimeout(() => {
  //       this.startPageNumber++;
  //       this.loadService.loadData(CONSTANTS.publicationsPageID, this.startPageNumber).subscribe((data) => {
  //         for(let post of data.publications) {
  //           if((post.tag.toLowerCase().indexOf(this.newsPaperTag) == -1)&&(post.tag.toLowerCase().indexOf(this.testTag) == -1)) {
  //             this.publicationsJson.push(post);
  //             this.storage.setSavedPublications(post);
  //           }
  //         }
  //       })
  //       infiniteScroll.complete();
  //     }, CONSTANTS.scrollTimeOutDuration)
  //   } else {
  //     infiniteScroll.enable(false);
  //   }
  // }

  public doRefresh(refresing) {
    if(this.loadService.isConnect()) {
      this.startPageNumber = CONSTANTS.startPageNumber;
    }
    this.loadView();
    if(this.scroll != undefined) this.scroll.enable(true);
    setTimeout(() => {
      refresing.complete();
    }, CONSTANTS.refreshTimeOutDuration);
  }
}
