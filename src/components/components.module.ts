import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { CardAtendimentoComponent } from './card-atendimento/card-atendimento';
import { CardAtividadeComponent } from './card-atividade/card-atividade';

@NgModule({
  declarations: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  entryComponents: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
  ],
  providers: [
  ],
  exports: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
  ]
})
export class ComponentsModule {}
