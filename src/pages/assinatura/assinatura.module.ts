import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AssinaturaPage } from './assinatura';

@NgModule({
  declarations: [
    AssinaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(AssinaturaPage),
    SignaturePadModule,
  ],
  entryComponents: [
    AssinaturaPage,
  ],
})

export class AssinaturaModule { }
