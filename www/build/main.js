webpackJsonp([6],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_service_storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_preloader_service_preloader_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_description_news_description__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_app_constants__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import { BlogsDescriptionPage } from './../blogs-description/blogs-description';
// import { PublicationsDescriptionPage } from './../publications-description/publications-description';









var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, loadService, storageService, platform, dateService, screenOrientation, events, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadService = loadService;
        this.storageService = storageService;
        this.platform = platform;
        this.dateService = dateService;
        this.screenOrientation = screenOrientation;
        this.events = events;
        this.toast = toast;
        this.startPageNumber = __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        this.newsJson = [];
        this.scroll = undefined;
        this.isSpinnerHidden = !this.loadService.isConnect();
        this.platform.ready().then(function () {
            _this.navParams.get('newsJson');
            _this.navParams.get('topPost');
            _this.loadView();
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
        });
    }
    NewsPage.prototype.lockScreenOrientation = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    NewsPage.prototype.presentToast = function () {
        var disToast = this.toast.create({
            message: __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].disconnectToastMessage,
            duration: __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].toastDisplayTimeDuration,
            position: __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].toastDisplayPosition
        });
        disToast.present();
    };
    NewsPage.prototype.loadView = function () {
        var connection = this.loadService.isConnect();
        this.lockScreenOrientation();
        this.newsJson.length = 0;
        if (connection) {
            this.getTopPost();
            this.loadNewsPull();
        }
        else {
            this.setTopPost();
            this.setNewsPull();
            this.isSpinnerHidden = true;
            this.presentToast();
        }
    };
    NewsPage.prototype.getTopPost = function () {
        var _this = this;
        this.loadService.loadTopArticle().subscribe(function (data) {
            _this.topPost = data;
            _this.storageService.setTopPost(data);
        });
    };
    NewsPage.prototype.setTopPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var top;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getTopPost()];
                    case 1:
                        top = _a.sent();
                        this.topPost = top;
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsPage.prototype.loadNewsPull = function () {
        var _this = this;
        this.loadService.loadData(__WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].newsPageID, this.startPageNumber).subscribe(function (data) {
            for (var _i = 0, _a = data.articles; _i < _a.length; _i++) {
                var post = _a[_i];
                _this.newsJson.push(post);
                _this.storageService.setSavedNews(post);
            }
        });
        setTimeout(function () {
            _this.isSpinnerHidden = true;
        }, __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].spinnerHideTimeOutDuration);
    };
    NewsPage.prototype.setNewsPull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var news;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getSavedNews()];
                    case 1:
                        news = _a.sent();
                        this.newsJson = news;
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsPage.prototype.loadDescription = function (event, news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_description_news_description__["a" /* NewsDescriptionPage */], { 'newsSelected': news });
    };
    NewsPage.prototype.loadTopPost = function (event, news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_description_news_description__["a" /* NewsDescriptionPage */], { 'newsSelected': news });
    };
    NewsPage.prototype.swipeToNext = function (event) {
        if (event.direction == '1' || event.direction == '2')
            this.navCtrl.parent.select(__WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].publicationsPageID);
    };
    NewsPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    NewsPage.prototype.checkDate = function (date) {
        return this.dateService.checkDay(date);
    };
    NewsPage.prototype.checkPR = function (pr) {
        if (pr == '1')
            return true;
        else if (pr == '0')
            return false;
        else
            return false;
    };
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
    NewsPage.prototype.doRefresh = function (refresing) {
        if (this.loadService.isConnect()) {
            this.startPageNumber = __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        }
        this.loadView();
        if (this.scroll != undefined)
            this.scroll.enable(true);
        setTimeout(function () {
            refresing.complete();
        }, __WEBPACK_IMPORTED_MODULE_8__config_app_constants__["a" /* CONSTANTS */].refreshTimeOutDuration);
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/news/news.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <ion-title>\n  <img src="images/topkonotop_logo white.svg" alt="logo">\n    </ion-title>\n  </ion-navbar>\n    <div class="data">\n      <p>{{getLocalDate()}}</p>\n    </div>\n\n</ion-header>\n\n\n<ion-content padding >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Потягнiть, щоб оновити"\n      refreshingSpinner="circles"\n      refreshingText="Зачекайте...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-spinner class="loader" [hidden]=\'this.isSpinnerHidden\'></ion-spinner>\n\n  <ion-card *ngFor="let post of topPost" (click)="loadTopPost($event, post)">\n      <img src="{{post.image}}"/>\n      <div class="info">\n          <span class="card-subtitle">{{post.tag}}</span>\n          <div class="card-title">{{post.title}}</div>\n      </div>\n  </ion-card>\n\n  <ion-list (swipe)="swipeToNext($event)" no-lines>\n    <ion-item *ngFor="let news of newsJson" (click)="loadDescription($event, news)">\n      <!--<img *ngIf="news.options.pk == \'1\'" src=\'images/PR.svg\'>-->\n\n      <div class="newsInfo">\n          <span>{{checkDate(news.date)}} {{news.time}}<img *ngIf="checkPR(news.options.pk)" src=\'images/PR.svg\' class="label-icon"> <img *ngIf="checkPR(news.options.p)" src="images/P.svg" class="label-icon"></span>     \n          <p>{{news.title}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-infinite-scroll (ionInfinite) = "doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/news/news.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_6__providers_preloader_service_preloader_service__["a" /* PreloaderService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_storage_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__["a" /* DateService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_app_constants__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_service_storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publications_description_publications_description__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { BlogsDescriptionPage } from './../blogs-description/blogs-description';
// import { NewsDescriptionPage } from './../news-description/news-description';










var PublicationsPage = (function () {
    function PublicationsPage(navCtrl, navParams, loadService, dateService, storage, screenOrientation, events, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadService = loadService;
        this.dateService = dateService;
        this.storage = storage;
        this.screenOrientation = screenOrientation;
        this.events = events;
        this.toast = toast;
        this.startPageNumber = __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        this.publicationsJson = [];
        this.newsPaperTag = "газета «факти»";
        this.testTag = "тест";
        this.scroll = undefined;
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
    PublicationsPage.prototype.ionViewWillLoad = function () {
        this.loadView();
    };
    PublicationsPage.prototype.lockScreenOrientation = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    PublicationsPage.prototype.presentToast = function () {
        var disToast = this.toast.create({
            message: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].disconnectToastMessage,
            duration: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].toastDisplayTimeDuration,
            position: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].toastDisplayPosition
        });
        disToast.present();
    };
    PublicationsPage.prototype.loadView = function () {
        this.lockScreenOrientation();
        this.publicationsJson.length = 0;
        if (this.loadService.isConnect()) {
            this.loadPublicationsPull();
        }
        else {
            this.setPublicationsPull();
            this.presentToast();
        }
    };
    PublicationsPage.prototype.loadPublicationsPull = function () {
        var _this = this;
        this.loadService.loadData(__WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].publicationsPageID, this.startPageNumber).subscribe(function (data) {
            for (var _i = 0, _a = data.publications; _i < _a.length; _i++) {
                var post = _a[_i];
                if ((post.tag.toLowerCase().indexOf(_this.newsPaperTag) == -1) && (post.tag.toLowerCase().indexOf(_this.testTag) == -1)) {
                    _this.publicationsJson.push(post);
                    _this.storage.setSavedPublications(post);
                }
            }
        });
        setTimeout(function () {
            _this.isSpinnerHidden = true;
        }, __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].spinnerHideTimeOutDuration);
    };
    PublicationsPage.prototype.setPublicationsPull = function () {
        var _this = this;
        this.storage.getSavedPublications().then(function (publStored) {
            _this.publicationsJson = publStored;
        });
    };
    PublicationsPage.prototype.loadDescription = function (event, publication) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__publications_description_publications_description__["a" /* PublicationsDescriptionPage */], { 'publicationSelected': publication });
    };
    PublicationsPage.prototype.swipeTo = function (event) {
        if (event.direction == '1' || event.direction == '2') {
            this.navCtrl.parent.select(__WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].blogsPageID);
        }
        else {
            this.navCtrl.parent.select(__WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].newsPageID);
        }
    };
    PublicationsPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    PublicationsPage.prototype.checkDate = function (date) {
        var someDate = date;
        if (this.dateService.checkFullDate() + (__WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY')).toString() == someDate) {
            return "Сьогоднi";
        }
        else if (this.dateService.getYesterdayDate() + (__WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY')).toString() == someDate) {
            return "Вчора";
        }
        else {
            return someDate;
        }
    };
    PublicationsPage.prototype.checkPR = function (pr) {
        if (pr == '1')
            return true;
        else if (pr == '0')
            return false;
        else
            return false;
    };
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
    PublicationsPage.prototype.doRefresh = function (refresing) {
        if (this.loadService.isConnect()) {
            this.startPageNumber = __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        }
        this.loadView();
        if (this.scroll != undefined)
            this.scroll.enable(true);
        setTimeout(function () {
            refresing.complete();
        }, __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].refreshTimeOutDuration);
    };
    return PublicationsPage;
}());
PublicationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-publications',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/publications/publications.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <ion-title>\n       <img src="images/topkonotop_logo white.svg" alt="logo">\n    </ion-title>\n  </ion-navbar>\n    <div class="data">\n      <p>{{getLocalDate()}}</p>\n    </div>\n</ion-header>\n\n<ion-content padding class="card-background-page" no-lines (swipe)="swipeTo($event)">\n\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Потягнiть, щоб оновити"\n      refreshingSpinner="circles"\n      refreshingText="Зачекайте...">\n    </ion-refresher-content>\n</ion-refresher>\n\n<ion-spinner class="loader" [hidden]=\'this.isSpinnerHidden\'></ion-spinner>\n\n<ion-list no-lines>\n    <ion-card *ngFor="let publication of publicationsJson" (click)="loadDescription($event, publication)">\n        <img src="{{publication.image}}"/>\n      \n        <div class="info">\n            <div class="card-subtitle">\n              <span>{{checkDate(publication.date)}} • {{publication.authorName}} </span>\n              <img *ngIf="checkPR(publication.options.pk)" src=\'images/PR.svg\' class="label-publ"> <img *ngIf="checkPR(publication.options.p)" src="images/P.svg" class="label-publ">\n            </div>\n            <div class="card-title">{{publication.title}}</div>\n        </div>\n    </ion-card>\n</ion-list>\n\n<!-- <ion-infinite-scroll (ionInfinite) = "doInfinite($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll> -->\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/publications/publications.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */], __WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_5__providers_storage_service_storage_service__["a" /* StorageService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__["a" /* DateService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_storage_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], PublicationsPage);

//# sourceMappingURL=publications.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_app_constants__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_service_storage_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blogs_description_blogs_description__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { PublicationsDescriptionPage } from './../publications-description/publications-description';
// import { NewsDescriptionPage } from './../news-description/news-description';









var BlogsPage = (function () {
    function BlogsPage(navCtrl, navParams, loadService, dateService, storageService, screenOrientation, events, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadService = loadService;
        this.dateService = dateService;
        this.storageService = storageService;
        this.screenOrientation = screenOrientation;
        this.events = events;
        this.toast = toast;
        this.startPageNumber = __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        this.blogsJson = [];
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
    BlogsPage.prototype.lockScreenOrientation = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    };
    BlogsPage.prototype.ionViewWillLoad = function () {
        this.loadView();
    };
    BlogsPage.prototype.presentToast = function () {
        var disToast = this.toast.create({
            message: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].disconnectToastMessage,
            duration: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].toastDisplayTimeDuration,
            position: __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].toastDisplayPosition
        });
        disToast.present();
    };
    BlogsPage.prototype.loadView = function () {
        this.lockScreenOrientation();
        this.blogsJson.length = 0;
        if (this.loadService.isConnect()) {
            this.loadBlogsPull();
        }
        else {
            this.setBlogsPull();
            this.presentToast();
        }
    };
    BlogsPage.prototype.loadBlogsPull = function () {
        var _this = this;
        this.loadService.loadData(__WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].blogsPageID, this.startPageNumber).subscribe(function (data) {
            for (var _i = 0, _a = data.blogs; _i < _a.length; _i++) {
                var post = _a[_i];
                _this.blogsJson.push(post);
                _this.storageService.setSavedBlogs(post);
            }
        });
        setTimeout(function () {
            _this.isSpinnerHidden = true;
        }, __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].spinnerHideTimeOutDuration);
    };
    BlogsPage.prototype.setBlogsPull = function () {
        var _this = this;
        this.storageService.getSavedBlogs().then(function (blogsStored) {
            _this.blogsJson = blogsStored;
        });
    };
    BlogsPage.prototype.loadDescription = function (event, blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__blogs_description_blogs_description__["a" /* BlogsDescriptionPage */], { 'blogSelected': blog });
    };
    BlogsPage.prototype.swipeToPrev = function (event) {
        if (event.direction == '4')
            this.navCtrl.parent.select(__WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].publicationsPageID);
    };
    BlogsPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    BlogsPage.prototype.checkDate = function (date) {
        return this.dateService.checkDay(date);
    };
    BlogsPage.prototype.doRefresh = function (refresing) {
        if (this.loadService.isConnect()) {
            this.startPageNumber = __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].startPageNumber;
        }
        this.loadView();
        setTimeout(function () {
            refresing.complete();
        }, __WEBPACK_IMPORTED_MODULE_0__config_app_constants__["a" /* CONSTANTS */].refreshTimeOutDuration);
        refresing.complete();
    };
    return BlogsPage;
}());
BlogsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-blogs',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/blogs/blogs.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <ion-title>\n     <img src="images/topkonotop_logo white.svg" alt="logo">\n    </ion-title>\n  </ion-navbar>\n    <div class="data"> \n      <p>{{getLocalDate()}}</p>\n    </div>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Потягнiть, щоб оновити"\n      refreshingSpinner="circles"\n      refreshingText="Зачекайте...">\n    </ion-refresher-content>\n</ion-refresher>\n\n<ion-spinner class="loader" [hidden]=\'this.isSpinnerHidden\'></ion-spinner>\n\n<ion-list (swipe)="swipeToPrev($event)" no-lines>\n  <ion-item *ngFor="let blog of blogsJson" (click)="loadDescription($event, blog)">\n    <ion-avatar item-left class="icon-avatar">\n      <img src="{{blog.authorPhoto}}">\n    </ion-avatar>\n    <p class="author">{{blog.author}}</p>\n    <p class="blog__title">{{blog.title}}</p>\n    <span>{{checkDate(blog.date)}} {{blog.time}}</span>\n   \n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/blogs/blogs.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */], __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_6__providers_storage_service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_date_service_date_service__["a" /* DateService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_storage_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], BlogsPage);

//# sourceMappingURL=blogs.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blogs-description/blogs-description.module": [
		407,
		5
	],
	"../pages/blogs/blogs.module": [
		408,
		4
	],
	"../pages/news-description/news-description.module": [
		403,
		3
	],
	"../pages/news/news.module": [
		404,
		2
	],
	"../pages/publications-description/publications-description.module": [
		405,
		1
	],
	"../pages/publications/publications.module": [
		406,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_constants__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadService = (function () {
    function LoadService(http, network) {
        this.http = http;
        this.network = network;
        this.apiUrl = 'index.php?route=api/mobile_api/';
        this.receivedArticlesUrl = 'getArticlesById&article_id=';
        this.articlesUrl = 'loadArticles&page=';
        this.publicationUrl = 'loadPublications&page=';
        this.blogsUrl = 'loadBlogs&start=0&limit=9';
        this.topArticleUrl = 'getTopArticle';
        this.limitUrl = "&limit=30";
        this.articleViewsUrl = "mobileLogShow";
        this.blogViewsUrl = "getMobilePostInfo";
        this.unknownNetworkType = 'unknown';
        this.noNetworkIsAvaliable = 'none';
    }
    LoadService.prototype.isConnect = function () {
        if (this.network.type == this.unknownNetworkType || this.network.type == this.noNetworkIsAvaliable)
            return false;
        else
            return true;
    };
    LoadService.prototype.loadReceivedPost = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.receivedArticlesUrl + id).map(function (res) { return res.json(); });
    };
    LoadService.prototype.loadTopArticle = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.topArticleUrl).map(function (res) { return res.json(); });
    };
    LoadService.prototype.loadData = function (pageId, startPage) {
        switch (pageId) {
            case __WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].newsPageID: return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.articlesUrl + startPage + this.limitUrl).map(function (res) { return res.json(); });
            case __WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].publicationsPageID: return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.publicationUrl + startPage + this.limitUrl).map(function (res) { return res.json(); });
            case __WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].blogsPageID: return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.blogsUrl).map(function (res) { return res.json(); });
        }
    };
    LoadService.prototype.sendViews = function (id, postType) {
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        if (postType == 'article') {
            body.append('article_id', id.toString());
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.articleViewsUrl, body).subscribe(function (data) {
                // console.log(data);
            });
        }
        else if (postType == 'blog') {
            body.append('blog_id', id.toString());
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__config_app_constants__["a" /* CONSTANTS */].mainUrl + this.apiUrl + this.blogViewsUrl, body).subscribe(function (data) {
                // console.log(data);
            });
        }
    };
    return LoadService;
}());
LoadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
], LoadService);

//# sourceMappingURL=load-service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// date for ukr local
var DateService = (function () {
    function DateService() {
        this.currentDate = new Date();
    }
    DateService.prototype.getCurrentMonth = function () {
        switch (this.currentDate.getMonth()) {
            case 0: return "cічня";
            case 1: return "лютого";
            case 2: return "березня";
            case 3: return "квітня";
            case 4: return "травня";
            case 5: return "червня";
            case 6: return "липня";
            case 7: return "серпня";
            case 8: return "вересня";
            case 9: return "жовтня";
            case 10: return "листопада";
            case 11: return "грудня";
        }
    };
    DateService.prototype.getPrevMonth = function (month) {
        switch (month) {
            case 0: return "cічня";
            case 1: return "лютого";
            case 2: return "березня";
            case 3: return "квітня";
            case 4: return "травня";
            case 5: return "червня";
            case 6: return "липня";
            case 7: return "серпня";
            case 8: return "вересня";
            case 9: return "жовтня";
            case 10: return "листопада";
            case 11: return "грудня";
        }
    };
    DateService.prototype.getCurrentWeekDay = function () {
        switch (this.currentDate.getDay()) {
            case 0: return "Неділя";
            case 1: return "Понеділок";
            case 2: return "Вівторок";
            case 3: return "Середа";
            case 4: return "Четвер";
            case 5: return "П'ятниця";
            case 6: return "Субота";
        }
    };
    DateService.prototype.getFullDate = function () {
        return this.currentDate.getDate() + " " + this.getCurrentMonth() + ", " + this.getCurrentWeekDay();
    };
    DateService.prototype.checkFullDate = function () {
        return this.currentDate.getDate() + " " + this.getCurrentMonth() + " ";
    };
    DateService.prototype.getYesterdayDate = function () {
        if (this.currentDate.getDate() - 1 == 0)
            return "31" + " " + this.getPrevMonth(this.currentDate.getMonth() - 1) + " ";
        else
            return (this.currentDate.getDate() - 1) + " " + this.getCurrentMonth() + " ";
    };
    DateService.prototype.checkDay = function (day) {
        if (this.checkFullDate() == day) {
            return "Сьогоднi";
        }
        else if (this.getYesterdayDate() == day) {
            return "Вчора";
        }
        else {
            return day;
        }
    };
    return DateService;
}());
DateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], DateService);

//# sourceMappingURL=date-service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_publications__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_app_constants__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_description_news_description__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blogs_description_blogs_description__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__publications_description_publications_description__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(screenOrientation, platform, events, navCtrl) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.events = events;
        this.navCtrl = navCtrl;
        this.newsRoot = __WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */];
        this.publicationsRoot = __WEBPACK_IMPORTED_MODULE_3__publications_publications__["a" /* PublicationsPage */];
        this.blogsRoot = __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__["a" /* BlogsPage */];
        this.platform.ready().then(function () {
            _this.events.subscribe(__WEBPACK_IMPORTED_MODULE_6__config_app_constants__["a" /* CONSTANTS */].receivedIdStatus, function (type, data) {
                switch (type) {
                    case __WEBPACK_IMPORTED_MODULE_6__config_app_constants__["a" /* CONSTANTS */].newsPageID: {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_description_news_description__["a" /* NewsDescriptionPage */], { 'newsSelected': data });
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_6__config_app_constants__["a" /* CONSTANTS */].publicationsPageID: {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__publications_description_publications_description__["a" /* PublicationsDescriptionPage */], { 'publicationSelected': data });
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_6__config_app_constants__["a" /* CONSTANTS */].blogsPageID: {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__blogs_description_blogs_description__["a" /* BlogsDescriptionPage */], { 'blogSelected': data });
                    }
                }
            });
        });
    }
    HomePage.prototype.lockScreenOrientation = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'home',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/home/home.html"*/'<ion-tabs tabsPlacement="top">\n  <ion-tab [root]="newsRoot" tabTitle="Новини"></ion-tab>\n  <ion-tab [root]="publicationsRoot" tabTitle="Публікації" ></ion-tab>\n  <ion-tab [root]="blogsRoot" tabTitle="Блоги " ></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_app_constants__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationProvider = (function () {
    function NotificationProvider(oneSignal, events, loadService) {
        this.oneSignal = oneSignal;
        this.events = events;
        this.loadService = loadService;
        this.oneSignalAppId = "83da7dc1-c757-48ad-aa97-c56a8179ac3b";
        this.googleProjectId = "745465353653";
    }
    NotificationProvider.prototype.startNotificate = function () {
        var _this = this;
        this.oneSignal.startInit(this.oneSignalAppId, this.googleProjectId);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened().subscribe(function (jsonData) {
            var id = parseInt((JSON.parse(JSON.parse(jsonData.notification.payload.rawPayload).custom).a).article_id);
            var type = parseInt((JSON.parse(JSON.parse(jsonData.notification.payload.rawPayload).custom).a).category_id);
            _this.loadService.loadReceivedPost(id).subscribe(function (data) {
                if (type == __WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].newsCategoryID) {
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].receivedIdStatus, __WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].newsPageID, data);
                }
                else if (type == __WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].publicationsCategoryID) {
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].receivedIdStatus, __WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].publicationsPageID, data);
                }
                else {
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].receivedIdStatus, __WEBPACK_IMPORTED_MODULE_1__config_app_constants__["a" /* CONSTANTS */].blogsPageID, data);
                }
            });
        });
        this.oneSignal.endInit();
    };
    return NotificationProvider;
}());
NotificationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__load_service_load_service__["a" /* LoadService */]])
], NotificationProvider);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_publications_publications__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_blogs_blogs__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_news_description_news_description__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_blogs_description_blogs_description__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_publications_description_publications_description__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_preloader_service_preloader_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_onesignal__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_notification_notification__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_background_mode__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* myApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_publications_publications__["a" /* PublicationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_blogs_blogs__["a" /* BlogsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_news_description_news_description__["a" /* NewsDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_blogs_description_blogs_description__["a" /* BlogsDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_publications_description_publications_description__["a" /* PublicationsDescriptionPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* myApp */], {
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/news-description/news-description.module#NewsDescriptionPageModule', name: 'NewsDescriptionPage', segment: 'news-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/publications-description/publications-description.module#PublicationsDescriptionPageModule', name: 'PublicationsDescriptionPage', segment: 'publications-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/publications/publications.module#PublicationsPageModule', name: 'PublicationsPage', segment: 'publications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blogs-description/blogs-description.module#BlogsDescriptionPageModule', name: 'BlogsDescriptionPage', segment: 'blogs-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blogs/blogs.module#BlogsPageModule', name: 'BlogsPage', segment: 'blogs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* myApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_publications_publications__["a" /* PublicationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_blogs_blogs__["a" /* BlogsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_news_description_news_description__["a" /* NewsDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_blogs_description_blogs_description__["a" /* BlogsDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_publications_description_publications_description__["a" /* PublicationsDescriptionPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_load_service_load_service__["a" /* LoadService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_19__providers_date_service_date_service__["a" /* DateService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_20__providers_preloader_service_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_22__providers_notification_notification__["a" /* NotificationProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONSTANTS; });
var CONSTANTS = {
    mainUrl: 'http://topkonotop.com/',
    newsCategoryID: 59,
    publicationsCategoryID: 60,
    topPostStorageKey: 'top',
    newsStorageKey: 'news',
    publicationsStorageKey: 'publications',
    blogsStorageKey: 'blogs',
    newsPageID: 0,
    publicationsPageID: 1,
    blogsPageID: 2,
    startPageNumber: 1,
    newsJsonMaxLength: 30,
    publicationsJsonMaxLength: 20,
    blogsJsonMaxLength: 10,
    scrollTimeOutDuration: 1000,
    refreshTimeOutDuration: 1000,
    spinnerHideTimeOutDuration: 1000,
    toastDisplayTimeDuration: 3000,
    receivedIdStatus: 'id:received',
    toastDisplayPosition: 'bottom',
    disconnectToastMessage: 'Відсутнє інтернет з\'єднання'
};
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-au": 194,
	"./en-au.js": 194,
	"./en-ca": 195,
	"./en-ca.js": 195,
	"./en-gb": 196,
	"./en-gb.js": 196,
	"./en-ie": 197,
	"./en-ie.js": 197,
	"./en-nz": 198,
	"./en-nz.js": 198,
	"./eo": 199,
	"./eo.js": 199,
	"./es": 200,
	"./es-do": 201,
	"./es-do.js": 201,
	"./es.js": 200,
	"./et": 202,
	"./et.js": 202,
	"./eu": 203,
	"./eu.js": 203,
	"./fa": 204,
	"./fa.js": 204,
	"./fi": 205,
	"./fi.js": 205,
	"./fo": 206,
	"./fo.js": 206,
	"./fr": 207,
	"./fr-ca": 208,
	"./fr-ca.js": 208,
	"./fr-ch": 209,
	"./fr-ch.js": 209,
	"./fr.js": 207,
	"./fy": 210,
	"./fy.js": 210,
	"./gd": 211,
	"./gd.js": 211,
	"./gl": 212,
	"./gl.js": 212,
	"./gom-latn": 213,
	"./gom-latn.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it.js": 221,
	"./ja": 222,
	"./ja.js": 222,
	"./jv": 223,
	"./jv.js": 223,
	"./ka": 224,
	"./ka.js": 224,
	"./kk": 225,
	"./kk.js": 225,
	"./km": 226,
	"./km.js": 226,
	"./kn": 227,
	"./kn.js": 227,
	"./ko": 228,
	"./ko.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mr": 238,
	"./mr.js": 238,
	"./ms": 239,
	"./ms-my": 240,
	"./ms-my.js": 240,
	"./ms.js": 239,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./th": 267,
	"./th.js": 267,
	"./tl-ph": 268,
	"./tl-ph.js": 268,
	"./tlh": 269,
	"./tlh.js": 269,
	"./tr": 270,
	"./tr.js": 270,
	"./tzl": 271,
	"./tzl.js": 271,
	"./tzm": 272,
	"./tzm-latn": 273,
	"./tzm-latn.js": 273,
	"./tzm.js": 272,
	"./uk": 274,
	"./uk.js": 274,
	"./ur": 275,
	"./ur.js": 275,
	"./uz": 276,
	"./uz-latn": 277,
	"./uz-latn.js": 277,
	"./uz.js": 276,
	"./vi": 278,
	"./vi.js": 278,
	"./x-pseudo": 279,
	"./x-pseudo.js": 279,
	"./yo": 280,
	"./yo.js": 280,
	"./zh-cn": 281,
	"./zh-cn.js": 281,
	"./zh-hk": 282,
	"./zh-hk.js": 282,
	"./zh-tw": 283,
	"./zh-tw.js": 283
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 383;

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var myApp = (function () {
    function myApp(platform, statusBar, splashScreen, notifi) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.notifi = notifi;
        // make HomePage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    myApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.notifi.startNotificate();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    return myApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], myApp.prototype, "nav", void 0);
myApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'appComponent',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/app/app.html"*/'<!--<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<ion-nav [root]="rootPage" swipeBackEnabled="false" #content></ion-nav>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */]])
], myApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderService = (function () {
    function PreloaderService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    PreloaderService.prototype.presentLoadingIntro = function () {
        var introLoading = this.loadingCtrl.create({});
        return introLoading;
    };
    PreloaderService.prototype.presentPageLoading = function () {
        var pageLoading = this.loadingCtrl.create({
            duration: 200
        });
        pageLoading.present();
    };
    return PreloaderService;
}());
PreloaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], PreloaderService);

//# sourceMappingURL=preloader-service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsDescriptionPage = (function () {
    function NewsDescriptionPage(socialSharing, preLoad, navCtrl, navParams, loadService, dom, dateService) {
        this.socialSharing = socialSharing;
        this.preLoad = preLoad;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadService = loadService;
        this.dom = dom;
        this.dateService = dateService;
        this.newsDetail = navParams.get('newsSelected');
    }
    NewsDescriptionPage.prototype.ionViewDidLoad = function () {
        this.preLoad.presentPageLoading();
        if (this.newsDetail.id != undefined)
            this.loadService.sendViews(this.newsDetail.id, 'article');
        else
            this.loadService.sendViews(this.newsDetail.article_id, 'article');
    };
    NewsDescriptionPage.prototype.shareOnSocial = function (message, subject, url) {
        this.socialSharing.share(message, subject, null, url);
    };
    NewsDescriptionPage.prototype.checkDate = function (date) {
        this.dateService.checkDay(date);
    };
    NewsDescriptionPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    return NewsDescriptionPage;
}());
NewsDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-news-description',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/news-description/news-description.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <div class="data">\n        <p>Новини</p>\n    </div>\n    <ion-fab top right>\n      <button class="share__button" ion-fab (click)="shareOnSocial(newsDetail.title, newsDetail.title, newsDetail.link)">\n          <ion-icon name="share-alt"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="newsDetail.articleDescription != undefined; else receivedArticle">\n      <span>{{newsDetail.date}} {{newsDetail.time}}</span><span class="news_author">{{newsDetail.authorName}}</span>\n      <p class="news__item__title">{{newsDetail.title}}</p>\n      <img class="news__item__img"  src="{{newsDetail.image}}"/>\n    \n      <div [innerHTML]=\'dom.bypassSecurityTrustHtml(newsDetail.articleDescription)\' class="news"></div>\n  </div>\n\n  <ng-template #receivedArticle>\n      <span>{{newsDetail.date}} {{newsDetail.time}}</span><span class="news_author">{{newsDetail.authorName}}</span>\n      <p class="news__item__title">{{newsDetail.title}}</p>\n      <img class="news__item__img"  src="{{newsDetail.image}}"/>\n    \n      <div [innerHTML]=\'dom.bypassSecurityTrustHtml(newsDetail.description)\' class="news"></div>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/news-description/news-description.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__["a" /* PreloaderService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_load_service_load_service__["a" /* LoadService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_date_service_date_service__["a" /* DateService */]])
], NewsDescriptionPage);

//# sourceMappingURL=news-description.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PublicationsDescriptionPage = (function () {
    function PublicationsDescriptionPage(socialSharing, preLoad, navCtrl, navParams, dom, dateService, loadService) {
        this.socialSharing = socialSharing;
        this.preLoad = preLoad;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dom = dom;
        this.dateService = dateService;
        this.loadService = loadService;
        this.publicationDetail = navParams.get('publicationSelected');
        // this.loadService.sendViews(this.publicationDetail.id, 'article');
    }
    PublicationsDescriptionPage.prototype.ionViewDidLoad = function () {
        this.preLoad.presentPageLoading();
        if (this.publicationDetail.id != undefined)
            this.loadService.sendViews(this.publicationDetail.id, 'article');
        else
            this.loadService.sendViews(this.publicationDetail.article_id, 'article');
    };
    PublicationsDescriptionPage.prototype.shareOnSocial = function (message, subject, url) {
        this.socialSharing.share(message, subject, null, url);
        //this.share.shareOn(message, subject, url);
    };
    PublicationsDescriptionPage.prototype.checkDate = function (date) {
        this.dateService.checkDay(date);
    };
    PublicationsDescriptionPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    return PublicationsDescriptionPage;
}());
PublicationsDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-publications-description',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/publications-description/publications-description.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <div class="data">\n      <p>Публікації</p>\n    </div>\n    <ion-fab top right>\n      <button class="share__button" ion-fab (click)="shareOnSocial(publicationDetail.title, publicationDetail.title, publicationDetail.link)">\n          <ion-icon name="share-alt"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p class="publication__title">{{publicationDetail.title}}</p>\n  <p>{{checkDate(publicationDetail.date)}}</p>\n  <img src=\'{{publicationDetail.image}}\'/>\n  \n  <div [innerHTML]="dom.bypassSecurityTrustHtml(publicationDetail.description)" class="publication"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/publications-description/publications-description.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__["a" /* PreloaderService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__["a" /* DateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */]])
], PublicationsDescriptionPage);

//# sourceMappingURL=publications-description.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BlogsDescriptionPage = (function () {
    function BlogsDescriptionPage(socialSharing, preLoad, navCtrl, navParams, dateService, loadService, screenOrientation) {
        this.socialSharing = socialSharing;
        this.preLoad = preLoad;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dateService = dateService;
        this.loadService = loadService;
        this.screenOrientation = screenOrientation;
        this.blogDetail = this.navParams.get('blogSelected');
    }
    BlogsDescriptionPage.prototype.lockScreenOrientation = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    };
    BlogsDescriptionPage.prototype.ionViewDidLoad = function () {
        this.preLoad.presentPageLoading();
        this.loadService.sendViews(this.blogDetail.id, 'blog');
    };
    BlogsDescriptionPage.prototype.shareOnSocial = function (message, subject, url) {
        this.socialSharing.share(message, subject, null, url);
    };
    BlogsDescriptionPage.prototype.checkDate = function (date) {
        this.dateService.checkDay(date);
    };
    BlogsDescriptionPage.prototype.getLocalDate = function () {
        return this.dateService.getFullDate();
    };
    return BlogsDescriptionPage;
}());
BlogsDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-blogs-description',template:/*ion-inline-start:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/blogs-description/blogs-description.html"*/'\n<ion-header>\n\n  <ion-navbar class="header__logo">\n    <div class="data">\n        <p>Блоги</p>\n    </div>\n    <ion-fab top right>\n      <button class="share__button" ion-fab (click)="shareOnSocial(blogDetail.title, blogDetail.title, blogDetail.link)">\n        <ion-icon name="share-alt"></ion-icon>\n    </button>\n    </ion-fab>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p class="data">{{blogDetail.date}}</p>\n  <h2>{{blogDetail.title}}</h2>\n  <ion-item no-lines>\n   <ion-avatar item-left class="icon-avatar">\n      <img src="{{blogDetail.authorPhoto}}">\n   </ion-avatar>\n      <p class="author">{{blogDetail.author}}</p>\n       <span>{{blogDetail.signature}}</span> \n  </ion-item>\n\n  <div [innerHTML]=\'blogDetail.postText\' class="contant"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/p35/Documents/TopKonotop/TopKonotopApp/src/pages/blogs-description/blogs-description.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__providers_preloader_service_preloader_service__["a" /* PreloaderService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_date_service_date_service__["a" /* DateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_load_service_load_service__["a" /* LoadService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], BlogsDescriptionPage);

//# sourceMappingURL=blogs-description.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
        this.storedNews = [];
        this.storedPubl = [];
        this.storedBlogs = [];
        this.topKey = "top";
        this.newsKey = "news";
        this.publKey = "publications";
        this.blogsKey = "blogs";
    }
    StorageService.prototype.setTopPost = function (content) {
        this.storedTopPost = content;
        this.storage.set(this.topKey, content);
    };
    StorageService.prototype.getTopPost = function () {
        var _this = this;
        return this.storage.get(this.topKey).then(function (data) {
            _this.storedTopPost = data;
            return _this.storedTopPost;
        });
    };
    StorageService.prototype.setSavedNews = function (content) {
        this.storedNews.push(content);
        this.storage.set(this.newsKey, this.storedNews);
    };
    StorageService.prototype.getSavedNews = function () {
        var _this = this;
        return this.storage.get(this.newsKey).then(function (allData) {
            _this.storedNews = allData == undefined ? [] : allData;
            return _this.storedNews.slice(0, (_this.storedNews.length / 2 - 4));
        });
    };
    StorageService.prototype.setSavedPublications = function (content) {
        this.storedPubl.push(content);
        this.storage.set(this.publKey, this.storedPubl);
    };
    StorageService.prototype.getSavedPublications = function () {
        var _this = this;
        return this.storage.get(this.publKey).then(function (allData) {
            _this.storedPubl = allData == undefined ? [] : allData;
            return _this.storedPubl.slice(0, (_this.storedPubl.length / 2));
        });
    };
    StorageService.prototype.setSavedBlogs = function (content) {
        this.storedBlogs.push(content);
        this.storage.set(this.blogsKey, this.storedBlogs);
    };
    StorageService.prototype.getSavedBlogs = function () {
        var _this = this;
        return this.storage.get(this.blogsKey).then(function (allData) {
            _this.storedBlogs = allData == undefined ? [] : allData;
            return _this.storedBlogs.slice(0, (_this.storedBlogs.length / 2));
        });
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], StorageService);

//# sourceMappingURL=storage-service.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map