import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicationsDescriptionPage } from './publications-description';

@NgModule({
  declarations: [
    PublicationsDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicationsDescriptionPage),
  ],
  exports: [
    PublicationsDescriptionPage
  ]
})
export class PublicationsDescriptionPageModule {}
