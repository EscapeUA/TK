// import { PublicationsDescriptionPage } from './../publications-description/publications-description';
// import { NewsDescriptionPage } from './../news-description/news-description';
import { CONSTANTS } from './../../config/app.constants';
import { Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { LoadService } from "../../providers/load-service/load-service";
import { DateService } from "../../providers/date-service/date-service";
import { StorageService } from "../../providers/storage-service/storage-service";

import { BlogsDescriptionPage } from "../blogs-description/blogs-description";

import { Blog } from "../../model/blog";

@IonicPage()
@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html',
  providers: [LoadService, DateService, StorageService, ScreenOrientation]
})
export class BlogsPage {
  private startPageNumber: number = CONSTANTS.startPageNumber;

  public blogsJson: Blog[] = [];
  public isSpinnerHidden: boolean;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      public loadService: LoadService,
      private dateService: DateService,
      private storageService: StorageService,
      private screenOrientation: ScreenOrientation,
      public events: Events,
      private toast: ToastController) {

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
  
  lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
  } 

  ionViewWillLoad() {
    this.loadView();
  }

  private presentToast() {
    let disToast = this.toast.create({
      message: CONSTANTS.disconnectToastMessage,
      duration: CONSTANTS.toastDisplayTimeDuration,
      position: CONSTANTS.toastDisplayPosition
    })
    disToast.present();
  }

  private loadView() {
    this.lockScreenOrientation();
    this.blogsJson.length = 0;
    if(this.loadService.isConnect()) {
      this.loadBlogsPull();  
    } else {
      this.setBlogsPull();
      this.presentToast();
    } 
  }

  private loadBlogsPull() {
    this.loadService.loadData(CONSTANTS.blogsPageID, this.startPageNumber).subscribe((data) => {
      for(let post of data.blogs) {
        this.blogsJson.push(post);
        this.storageService.setSavedBlogs(post);
      }
    })
    setTimeout(() => {
      this.isSpinnerHidden = true;
    }, CONSTANTS.spinnerHideTimeOutDuration)
  }

  private setBlogsPull() {
    this.storageService.getSavedBlogs().then((blogsStored) => {
      this.blogsJson = blogsStored;
    })
  }
  
  loadDescription(event, blog) {
    this.navCtrl.push(BlogsDescriptionPage, {'blogSelected':blog});
  }

  public swipeToPrev(event) {
    if(event.direction == '4') this.navCtrl.parent.select(CONSTANTS.publicationsPageID);
  }

  public getLocalDate() : string {
    return this.dateService.getFullDate();
  }
  
  public checkDate(date) {
    return this.dateService.checkDay(date);
  }

  public doRefresh(refresing) {
    if(this.loadService.isConnect()) {
      this.startPageNumber = CONSTANTS.startPageNumber;
    }
    this.loadView();
    setTimeout(() => {
      refresing.complete();
    }, CONSTANTS.refreshTimeOutDuration);
     refresing.complete();
  }
}
