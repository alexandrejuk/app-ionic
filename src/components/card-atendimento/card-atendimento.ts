import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesAtendimentoPage } from '../../pages/detalhes-atendimento/detalhes-atendimento';

@Component({
  selector: 'card-atendimento-component',
  templateUrl: './card-atendimento.html'
})
export class CardAtendimentoComponent {

  constructor(public navCtrl: NavController) {}

  goToDetailAtendimento(id) {
    this.navCtrl.push(DetalhesAtendimentoPage, { id });
  }

}
