import { Platform, Events, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NewsPage } from "../news/news";
import { PublicationsPage } from "../publications/publications";
import { BlogsPage } from "../blogs/blogs";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { CONSTANTS } from "../../config/app.constants";

import { NewsDescriptionPage } from "../news-description/news-description";
import { BlogsDescriptionPage } from './../blogs-description/blogs-description';
import { PublicationsDescriptionPage } from './../publications-description/publications-description';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  providers: [ScreenOrientation]
})

export class HomePage {

  constructor(private screenOrientation:ScreenOrientation, private platform: Platform, private events: Events, private navCtrl: NavController)  {
    this.platform.ready().then(() => {
      this.events.subscribe(CONSTANTS.receivedIdStatus, (type, data) => {
        switch(type) {
          case CONSTANTS.newsPageID: {
            this.navCtrl.push(NewsDescriptionPage, {'newsSelected': data});
            break;
          } case CONSTANTS.publicationsPageID: {
            this.navCtrl.push(PublicationsDescriptionPage, {'publicationSelected': data});
            break;
          } case CONSTANTS.blogsPageID: {
            this.navCtrl.push(BlogsDescriptionPage, {'blogSelected': data})
          }
        }
      })
    })
  }

  newsRoot = NewsPage;
  publicationsRoot = PublicationsPage;
  blogsRoot = BlogsPage;

  lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
  }
  
}
