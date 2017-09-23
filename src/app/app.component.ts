import { Component, ViewChild } from '@angular/core';

import { Platform, Nav} from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotificationProvider } from "../providers/notification/notification";

@Component({
  selector: 'appComponent',
  templateUrl: 'app.html'
})
export class myApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = HomePage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private notifi: NotificationProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.notifi.startNotificate();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
