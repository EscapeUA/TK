import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogsDescriptionPage } from './blogs-description';

@NgModule({
  declarations: [
    BlogsDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogsDescriptionPage),
  ],
  exports: [
    BlogsDescriptionPage
  ]
})
export class BlogsDescriptionPageModule {}
