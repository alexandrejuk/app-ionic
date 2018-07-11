import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html'
})
@IonicPage({
  name: 'FotoPage',
})
export class FotoPage {

  public title="Fotos do Atendimento"

  constructor(public navCtrl: NavController) {

  }

}
