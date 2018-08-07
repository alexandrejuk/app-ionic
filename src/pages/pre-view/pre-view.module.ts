import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PreViewPage } from './pre-view';

@NgModule({
  declarations: [
    PreViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PreViewPage),
  ],
  entryComponents: [
    PreViewPage,
  ],
})

export class PreViewModule { }
