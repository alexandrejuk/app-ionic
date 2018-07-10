import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
@IonicPage({
  name: 'AboutPage',
})
export class AboutPage {

  public title="Sobre"

  constructor(public navCtrl: NavController) {

  }

}
