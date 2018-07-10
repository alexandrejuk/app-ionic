import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';

import { AtividadePage } from './atividade';

@NgModule({
  declarations: [
    AtividadePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AtividadePage),
  ],
  entryComponents: [
    AtividadePage,
  ],
})

export class AtividadeModule { }
