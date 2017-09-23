import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class ShareService {

    constructor(private socialSharing: SocialSharing) {}

    public shareOn(message, subject, url) {
      this.socialSharing.share(message, subject, null, url);
    }
}