import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { myApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from "@angular/http";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Network } from "@ionic-native/network";

import { NewsPage } from "../pages/news/news";
import { PublicationsPage } from "../pages/publications/publications";
import { BlogsPage } from "../pages/blogs/blogs";
import { NewsDescriptionPage } from "../pages/news-description/news-description";
import { BlogsDescriptionPage } from "../pages/blogs-description/blogs-description";
import { PublicationsDescriptionPage } from "../pages/publications-description/publications-description";

import { LoadService } from '../providers/load-service/load-service';
import { DateService } from "../providers/date-service/date-service";
import { PreloaderService } from "../providers/preloader-service/preloader-service";
import { OneSignal } from "@ionic-native/onesignal";
import { NotificationProvider } from '../providers/notification/notification';
import { BackgroundMode } from "@ionic-native/background-mode";




@NgModule({
  declarations: [
    myApp,
    HomePage,
    NewsPage,
    PublicationsPage,
    BlogsPage,
    NewsDescriptionPage,
    BlogsDescriptionPage,
    PublicationsDescriptionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(myApp, {
      tabsHideOnSubPages: true
   }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    myApp,
    HomePage,
    NewsPage,
    PublicationsPage,
    BlogsPage,
    NewsDescriptionPage,
    BlogsDescriptionPage,
    PublicationsDescriptionPage,
  ],
  providers: [
    HttpModule,
    BackgroundMode,
    StatusBar,
    SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadService,
    Network,
    DateService,
    SocialSharing,
    PreloaderService,
    OneSignal,
    NativeStorage,
    NotificationProvider
  ]
})
export class AppModule {}
