import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import {
  IonicPage,
  NavController,
  Platform,
} from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

import { RelatorioPage } from './../relatorio/relatorio';
import MessagesAlert from '../../utils/alertMessages';

@Component({
  selector: 'page-assinatura',
  templateUrl: 'assinatura.html'
})
@IonicPage({
  name: 'AssinaturaPage',
})
export class AssinaturaPage implements OnInit, OnDestroy {

  public title="Assinatura Atendimento"

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions = {
    minWidth: 2,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor(
    private platform: Platform,
  ) {
    platform.ready().then((readySource) => {
       this.signaturePadOptions.canvasWidth = platform.width();
       this.signaturePadOptions.canvasHeight = ((platform.height() / 100) * 45);
    });
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
  }

  resetSignature = () => this.signaturePad.clear();

  saveSignature() {
    console.log(this.signaturePad.toDataURL());
  }

}
