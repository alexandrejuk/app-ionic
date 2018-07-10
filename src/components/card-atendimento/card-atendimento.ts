import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhesPage } from '../../pages/detalhes/detalhes';

@Component({
  selector: 'card-atendimento-component',
  templateUrl: './card-atendimento.html'
})
export class CardAtendimentoComponent {

  constructor(public navCtrl: NavController) {}

  goToDetail(id) {
    this.navCtrl.push(DetalhesPage, { id });
  }

}
