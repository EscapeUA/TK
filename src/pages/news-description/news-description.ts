import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import { LoadService } from "../../providers/load-service/load-service";
import { DateService } from "../../providers/date-service/date-service";
import { PreloaderService } from "../../providers/preloader-service/preloader-service"
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-news-description',
  templateUrl: 'news-description.html',
  providers: [DateService, LoadService]
})
export class NewsDescriptionPage {

  public newsDetail: any;


  constructor(private socialSharing: SocialSharing, 
              private preLoad: PreloaderService, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadService: LoadService, 
              public dom: DomSanitizer, 
              private dateService: DateService) {

    this.newsDetail = navParams.get('newsSelected');
  }

  ionViewDidLoad() {
    this.preLoad.presentPageLoading();
    if(this.newsDetail.id != undefined) this.loadService.sendViews(this.newsDetail.id, 'article');
    else this.loadService.sendViews(this.newsDetail.article_id, 'article');
  }

  public shareOnSocial(message, subject, url) {
    this.socialSharing.share(message, subject, null, url);
  }

  public checkDate(date) {
    this.dateService.checkDay(date);
  }

  public getLocalDate(): string {
    return this.dateService.getFullDate();
  }

}
