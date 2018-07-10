import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  public title="DETALHES ATENDIMENTO"

  constructor(public navCtrl: NavController) {

  }

}
