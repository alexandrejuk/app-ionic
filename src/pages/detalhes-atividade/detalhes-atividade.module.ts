import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DetalhesAtividadePage } from './detalhes-atividade';

@NgModule({
  declarations: [
    DetalhesAtividadePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesAtividadePage),
  ],
  entryComponents: [
    DetalhesAtividadePage,
  ],
})

export class DetalhesAtividadeModule { }
