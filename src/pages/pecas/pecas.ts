import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';

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

  pecasChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


}
