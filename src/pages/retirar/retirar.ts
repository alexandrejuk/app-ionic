import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';

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

  pecasChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


}
