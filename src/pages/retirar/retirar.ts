import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-retirar',
  templateUrl: 'retirar.html'
})
@IonicPage({
  name: 'RetirarPage',
})
export class RetirarPage {

  public title="Retirar Equipamento"

  constructor(public navCtrl: NavController) {

  }

}
