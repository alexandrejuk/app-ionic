import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalEquipamentoComponent } from './modal-equipamento/modal-equipamento';


@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html'
})
@IonicPage({
  name: 'RelatorioPage',
})
export class RelatorioPage {

  public title="Relatório"
  public treinamentos = [];
  public Equipamentos = [];

  public treinamentoContent = [
    'Abonos',
    'Backup',
    'Cadastros',
    'Importação',
    'Justificativas',
    'Parâmetros',
    'Relatórios',
  ]

  public softwares = [
    'SECULLUM ACESSO.NET',
    'SECULLUM ACESSO',
    'SECULLUM ACADEMIA',
    'SECULLUM REFEITÓRIO',
    'INSPELL',
    'FLEXTIME 6',
    'FLEXTIME JR',
    'IPONTO 3',
    'PONTO SECULLUM 4',
    'PONTO SECULLUM 4 CLOUD',
    'SISTEMA HENRY 7X',
    'COLETOR KURUMIM',
    'CLREP',
    'TOP RONDA VIGIA',
    'TOP ACESSO',
    'PROGRAMADOR KURUMIM',
    'REP WEB'
  ]

  public equipamentoActions = [
    'Retirado',
    'Trocar Peça',
  ]

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) { }

  presentModalEquipamento() {
    const modal = this.modalCtrl.create(ModalEquipamentoComponent);
    modal.present();
  }


}
