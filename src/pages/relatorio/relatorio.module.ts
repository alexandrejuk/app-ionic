import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RelatorioPage } from './relatorio';
import { ModalEquipamentoComponent } from './modal-equipamento/modal-equipamento';

@NgModule({
  declarations: [
    RelatorioPage,
    ModalEquipamentoComponent,
  ],
  imports: [
    IonicPageModule.forChild(RelatorioPage),
  ],
  entryComponents: [
    RelatorioPage,
    ModalEquipamentoComponent,
  ],
})

export class RelatorioModule { }
