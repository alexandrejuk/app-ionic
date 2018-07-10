import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { CardAtendimentoComponent } from './card-atendimento/card-atendimento';
import { CardAtividadeComponent } from './card-atividade/card-atividade';
import { HeaderComponent } from './header/header';


@NgModule({
  declarations: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
    HeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  entryComponents: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
    HeaderComponent,
  ],
  providers: [
  ],
  exports: [
    CardAtendimentoComponent,
    CardAtividadeComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule {}
