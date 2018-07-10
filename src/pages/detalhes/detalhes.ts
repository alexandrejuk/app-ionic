import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
@IonicPage({
  name: 'DetalhesPage',
})
export class DetalhesPage {

  public title="Detalhes Atendimento"

  constructor(public navCtrl: NavController) {

  }

}