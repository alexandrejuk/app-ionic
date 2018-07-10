import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { CardAtendimentoComponent } from './card-atendimento/card-atendimento';
import { HeaderComponent } from './header/header';
import { ToolBarComponent } from './tool-bar/tool-bar'

@NgModule({
  declarations: [
    CardAtendimentoComponent,
    HeaderComponent,
    ToolBarComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  entryComponents: [
    CardAtendimentoComponent,
    HeaderComponent,
    ToolBarComponent
  ],
  providers: [
  ],
  exports: [
    CardAtendimentoComponent,
    HeaderComponent,
    ToolBarComponent
  ]
})
export class ComponentsModule {}
