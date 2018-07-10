import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-atividade',
  templateUrl: 'atividade.html'
})
@IonicPage({
  name: 'AtividadePage',
})
export class AtividadePage {

  public title="Atividades"

  constructor(public navCtrl: NavController) {

  }

}
