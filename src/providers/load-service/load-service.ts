import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Network } from "@ionic-native/network";
import 'rxjs/add/operator/map';

import { CONSTANTS } from "../../config/app.constants";

@Injectable()
export class LoadService {

  private apiUrl : string = 'index.php?route=api/mobile_api/';

  private receivedArticlesUrl: string = 'getArticlesById&article_id=';

  private articlesUrl: string = 'loadArticles&page=';
  private publicationUrl: string = 'loadPublications&page=';
  private blogsUrl: string = 'loadBlogs&start=0&limit=9';
  private topArticleUrl: string = 'getTopArticle';

  private limitUrl: string = "&limit=30";
  private articleViewsUrl: string = "mobileLogShow";
  private blogViewsUrl: string = "getMobilePostInfo";

  private unknownNetworkType: string = 'unknown';
  private noNetworkIsAvaliable: string = 'none';

  constructor(private http: Http, private network: Network) {
  }

  public isConnect() {
    if(this.network.type == this.unknownNetworkType || this.network.type == this.noNetworkIsAvaliable) return false;
    else return true;
  }

  public loadReceivedPost(id: number) {
    return this.http.get(CONSTANTS.mainUrl + this.apiUrl + this.receivedArticlesUrl + id).map(res => res.json());
  }

  public loadTopArticle() {
    return this.http.get(CONSTANTS.mainUrl + this.apiUrl + this.topArticleUrl).map(res => res.json())
  }

  public loadData(pageId: number, startPage: number) {
    switch(pageId) {
      case CONSTANTS.newsPageID: return this.http.get(CONSTANTS.mainUrl + this.apiUrl + this.articlesUrl + startPage + this.limitUrl).map(res => res.json());
      case CONSTANTS.publicationsPageID: return this.http.get(CONSTANTS.mainUrl + this.apiUrl + this.publicationUrl + startPage + this.limitUrl).map(res => res.json());
      case CONSTANTS.blogsPageID: return this.http.get(CONSTANTS.mainUrl + this.apiUrl + this.blogsUrl).map(res => res.json());
    }
  }

  public sendViews(id: number, postType: string) {
    let body = new URLSearchParams();
    if(postType == 'article') {
      body.append('article_id', id.toString())
        this.http.post(CONSTANTS.mainUrl + this.apiUrl + this.articleViewsUrl, body).subscribe(data => {
          // console.log(data);
        });
    } else if (postType == 'blog') {
      body.append('blog_id', id.toString())
        this.http.post(CONSTANTS.mainUrl + this.apiUrl + this.blogViewsUrl, body).subscribe(data => {
          // console.log(data);
        });
    }
  }
}