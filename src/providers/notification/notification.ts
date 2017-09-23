import { LoadService } from './../load-service/load-service';
import { CONSTANTS } from './../../config/app.constants';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Events } from "ionic-angular";

@Injectable()
export class NotificationProvider {

  private oneSignalAppId: string = "83da7dc1-c757-48ad-aa97-c56a8179ac3b";
  private googleProjectId: string = "745465353653";

  constructor(private oneSignal: OneSignal, public events: Events, private loadService: LoadService) {}

  public startNotificate() {
    this.oneSignal.startInit(this.oneSignalAppId, this.googleProjectId);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
      let id = parseInt((JSON.parse(JSON.parse(jsonData.notification.payload.rawPayload).custom).a).article_id);
      let type = parseInt((JSON.parse(JSON.parse(jsonData.notification.payload.rawPayload).custom).a).category_id);

      this.loadService.loadReceivedPost(id).subscribe((data) => {
        if(type == CONSTANTS.newsCategoryID) {
          this.events.publish(CONSTANTS.receivedIdStatus, CONSTANTS.newsPageID, data);
        } else if(type == CONSTANTS.publicationsCategoryID) {
          this.events.publish(CONSTANTS.receivedIdStatus, CONSTANTS.publicationsPageID, data);
        } else {
          this.events.publish(CONSTANTS.receivedIdStatus, CONSTANTS.blogsPageID, data);
        }
      })
    })
    this.oneSignal.endInit();
  }
} 
