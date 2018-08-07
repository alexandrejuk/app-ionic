import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectSearchableModule } from 'ionic-select-searchable';

import { PecasPage } from './pecas';

@NgModule({
  declarations: [
    PecasPage,
  ],
  imports: [
    IonicPageModule.forChild(PecasPage),
  ],
  entryComponents: [
    PecasPage,
  ],
})

export class PecasModule { }
