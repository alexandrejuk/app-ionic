import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-atividade',
  templateUrl: 'detalhes-atividade.html'
})
@IonicPage({
  name: 'DetalhesAtividadePage',
})
export class DetalhesAtividadePage {

  public title="Detalhes Atividade"

  constructor(public navCtrl: NavController) {

  }

}
