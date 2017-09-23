// import { BlogsDescriptionPage } from './../blogs-description/blogs-description';
// import { PublicationsDescriptionPage } from './../publications-description/publications-description';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, Events } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { LoadService } from "../../providers/load-service/load-service";
import { StorageService } from "../../providers/storage-service/storage-service";
import { DateService } from "../../providers/date-service/date-service";
import { PreloaderService } from "../../providers/preloader-service/preloader-service";

import { NewsDescriptionPage } from "../news-description/news-description";

import { Article } from "../../model/article";
import { CONSTANTS } from "../../config/app.constants";


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [LoadService, StorageService, DateService, PreloaderService]
})
export class NewsPage {
  private startPageNumber: number = CONSTANTS.startPageNumber;

  private newsJson: Article[] = [];
  private topPost: Article;
  public isSpinnerHidden: boolean;
  private scroll: any = undefined;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadService: LoadService,
    public storageService: StorageService,
    private platform: Platform,
    private dateService: DateService,
    private screenOrientation: ScreenOrientation,
    public events: Events,
    private toast: ToastController) {

      this.isSpinnerHidden = !this.loadService.isConnect();

      this.platform.ready().then(() => {
        this.navParams.get('newsJson');
        this.navParams.get('topPost');
        this.loadView();

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
      })  
  }

  private lockScreenOrientation() {
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
  
  public loadView() { // загрузка отображения
    let connection = this.loadService.isConnect();
    this.lockScreenOrientation();
    this.newsJson.length = 0;
    if(connection) { // загрузка из сети
      this.getTopPost();
      this.loadNewsPull();
    } else {
      this.setTopPost();
      this.setNewsPull();
      this.isSpinnerHidden = true;
      this.presentToast();
    }
  }

  public getTopPost() {
    this.loadService.loadTopArticle().subscribe((data) => {
      this.topPost = data;
      this.storageService.setTopPost(data);
    })
  }
    
  private async setTopPost() {
    let top;
    top = await this.storageService.getTopPost();
    this.topPost = top;
  }

  private loadNewsPull() {
    this.loadService.loadData(CONSTANTS.newsPageID, this.startPageNumber).subscribe((data) => {
      for(let post of data.articles) {
        this.newsJson.push(post);
        this.storageService.setSavedNews(post);
      }
    })
      setTimeout(() => {
        this.isSpinnerHidden = true;
      }, CONSTANTS.spinnerHideTimeOutDuration);
  }

  private async setNewsPull() {
    let news;
    news = await this.storageService.getSavedNews();
    this.newsJson = news;
  }

  public loadDescription(event, news) {
    this.navCtrl.push(NewsDescriptionPage, {'newsSelected': news});
  }

  public loadTopPost(event, news) {
    this.navCtrl.push(NewsDescriptionPage, {'newsSelected': news});
  }

  public swipeToNext(event) {
    if(event.direction == '1' || event.direction == '2') this.navCtrl.parent.select(CONSTANTS.publicationsPageID);
  }

  public getLocalDate() : string {
    return this.dateService.getFullDate();
  }
  
  public checkDate(date) {
    return this.dateService.checkDay(date);
  }

  public checkPR(pr: string | undefined) {
    if(pr == '1') return true;
    else if(pr == '0') return false;
    else return false;
  }

  // public doInfinite(infiniteScroll) {
  //   this.scroll = infiniteScroll;
  //   if(this.newsJson.length < CONSTANTS.newsJsonMaxLength) {
  //     setTimeout(() => {
  //       this.startPageNumber++;
  //       this.loadService.loadData(CONSTANTS.newsPageID, this.startPageNumber).subscribe((data) => {
  //         for(let post of data.articles) {
  //           this.newsJson.push(post);
  //           this.storageService.setSavedNews(post);
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

