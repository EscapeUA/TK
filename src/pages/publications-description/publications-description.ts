import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import { DateService } from "../../providers/date-service/date-service";
import { LoadService } from "../../providers/load-service/load-service";
import { PreloaderService } from "../../providers/preloader-service/preloader-service";
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-publications-description',
  templateUrl: 'publications-description.html',
  providers: [DateService, LoadService]
})
export class PublicationsDescriptionPage {

  public publicationDetail: any;

  constructor(private socialSharing: SocialSharing,
              private preLoad: PreloaderService, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public dom: DomSanitizer, 
              private dateService: DateService,
              private loadService: LoadService) {
    
    this.publicationDetail = navParams.get('publicationSelected');
    // this.loadService.sendViews(this.publicationDetail.id, 'article');

  }

  ionViewDidLoad() {
    this.preLoad.presentPageLoading();
    if(this.publicationDetail.id != undefined) this.loadService.sendViews(this.publicationDetail.id, 'article');
    else this.loadService.sendViews(this.publicationDetail.article_id, 'article');
  }

  public shareOnSocial(message, subject, url) {
    this.socialSharing.share(message, subject, null, url);
    //this.share.shareOn(message, subject, url);
  }

  public checkDate(date: string) {
    this.dateService.checkDay(date);
  }

  public getLocalDate() : string {
    return this.dateService.getFullDate();
  }
        
}
