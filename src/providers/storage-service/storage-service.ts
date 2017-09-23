import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageService {
    private storedTopPost: any;
    private storedNews: any = [];
    private storedPubl: any = [];
    private storedBlogs: any = [];

    private topKey = "top";
    private newsKey = "news";
    private publKey = "publications";
    private blogsKey = "blogs";

    constructor(private storage: Storage) {}
    
    public setTopPost(content) {
        this.storedTopPost = content;
        this.storage.set(this.topKey, content);
    }

    public getTopPost() {
        return this.storage.get(this.topKey).then((data) => {
            this.storedTopPost = data;
            return this.storedTopPost;
        })
    }
    
    public setSavedNews(content) {
        this.storedNews.push(content)
        this.storage.set(this.newsKey, this.storedNews);
    }

    public getSavedNews() {
        return this.storage.get(this.newsKey).then((allData) => {
            this.storedNews = allData == undefined ? [] : allData;
            return this.storedNews.slice(0, (this.storedNews.length/2 - 4)); 
        });
    }

    public setSavedPublications(content) {
        this.storedPubl.push(content)
        this.storage.set(this.publKey, this.storedPubl);
    }

    public getSavedPublications() {
        return this.storage.get(this.publKey).then((allData) => {
            this.storedPubl = allData == undefined ? [] : allData;
            return this.storedPubl.slice(0, (this.storedPubl.length/2));
        });
    }

    public setSavedBlogs(content) {
        this.storedBlogs.push(content)
        this.storage.set(this.blogsKey, this.storedBlogs);
    }

    public getSavedBlogs() {
        return this.storage.get(this.blogsKey).then((allData) => {
            this.storedBlogs = allData == undefined ? [] : allData;
            return this.storedBlogs.slice(0, (this.storedBlogs.length/2));
        });
    }
}