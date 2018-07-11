import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html'
})
@IonicPage({
  name: 'RelatorioPage',
})
export class RelatorioPage {

  public title="Relatório"

  constructor(public navCtrl: NavController) {

  }

}
