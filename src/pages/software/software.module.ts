import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SoftwarePage } from './software';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SoftwarePage,
  ],
  imports: [
    IonicPageModule.forChild(SoftwarePage),
    SelectSearchableModule,
  ],
  entryComponents: [
    SoftwarePage,
  ],
})

export class SoftwareModule { }
