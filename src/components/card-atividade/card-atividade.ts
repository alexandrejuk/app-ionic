import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhesAtividadePage } from '../../pages/detalhes-atividade/detalhes-atividade';

@Component({
  selector: 'card-atividade-component',
  templateUrl: './card-atividade.html'
})
export class CardAtividadeComponent {

  @Input()
  atividade;

  constructor(public navCtrl: NavController) { }

  goToDetailAtividade(id) {
    this.navCtrl.push(DetalhesAtividadePage, { id });
  }

  get status() {
    const status = {
      deslocamento_iniciado: 'Deslocamento Iniciado',
      deslocamento_encerrado: 'Deslocamento Encerrado',
      inicio_atividade: 'Atividade Iniciada',
      ecerrado_atividade: 'Atividade Concluída',
    }

    return status[this.atividade.status];
  }
}
