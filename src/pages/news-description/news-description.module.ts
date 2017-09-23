import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDescriptionPage } from './news-description';

@NgModule({
  declarations: [
    NewsDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDescriptionPage),
  ],
  exports: [
    NewsDescriptionPage
  ]
})
export class NewsDescriptionPageModule {}
