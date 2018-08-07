import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { EquipmentPage } from './../equipment/equipment';
import { SoftwarePage } from './../software/software';


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
  public dropDown = {
    software: false,
    pendencia: false,
    equipment: false,
  };

  private pages = {
    EquipmentPage,
    SoftwarePage,
  };

  public equipamentoActions = [
    'Retirado',
    'Trocar Peça',
  ]


  constructor(
    public navCtrl: NavController,
  ) { }

  onDropDown = type =>
    this.dropDown = { ...this.dropDown, [type]: !this.dropDown[type] };

  actionRepport(e) {
    console.log(e);
  }

  gotToRepportPage = (page) => {
    return this.navCtrl.push(this.pages[page]);
  }

}
