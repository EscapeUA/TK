import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DateService } from "../../providers/date-service/date-service";
import { LoadService } from "../../providers/load-service/load-service";
import { PreloaderService } from "../../providers/preloader-service/preloader-service";
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-blogs-description',
  templateUrl: 'blogs-description.html',
  providers: [DateService, LoadService, ScreenOrientation]
})
export class BlogsDescriptionPage {

  blogDetail: any;

  constructor(private socialSharing: SocialSharing, 
              private preLoad: PreloaderService, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private dateService: DateService,
              private loadService: LoadService,
              private screenOrientation:ScreenOrientation) {

    this.blogDetail = this.navParams.get('blogSelected');
    
  }
 lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
  } 
  ionViewDidLoad() {
    this.preLoad.presentPageLoading();
    this.loadService.sendViews(this.blogDetail.id, 'blog');
  }

  public shareOnSocial(message, subject, url) {
    this.socialSharing.share(message, subject, null, url);
  }

  public checkDate(date) {
    this.dateService.checkDay(date);
  }

  public getLocalDate() : string {
    return this.dateService.getFullDate();
  }

}
