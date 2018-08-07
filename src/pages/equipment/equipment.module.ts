import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EquipmentPage } from './equipment';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    EquipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentPage),
    SelectSearchableModule,
  ],
  entryComponents: [
    EquipmentPage,
  ],
})

export class EquipmentModule { }
