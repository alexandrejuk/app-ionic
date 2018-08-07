import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html'
})
@IonicPage({
  name: 'PecasPage',
})
export class PecasPage {

  public title="Pecas do Equipamento"

  constructor(public navCtrl: NavController) {

  }

}
