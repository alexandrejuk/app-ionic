import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectSearchableModule } from 'ionic-select-searchable';

import { RetirarPage } from './retirar';

@NgModule({
  declarations: [
    RetirarPage,
  ],
  imports: [
    IonicPageModule.forChild(RetirarPage),
  ],
  entryComponents: [
    RetirarPage,
  ],
})

export class RetirarModule { }
