import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhesAtividadePage } from '../../pages/detalhes-atividade/detalhes-atividade';

@Component({
  selector: 'card-atividade-component',
  templateUrl: './card-atividade.html'
})
export class CardAtividadeComponent {

  constructor(public navCtrl: NavController) {}

  goToDetail(id) {
    this.navCtrl.push(DetalhesAtividadePage, { id });
  }

}
