import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
@IonicPage({
  name: 'ProfilePage',
})
export class ProfilePage {

  public title="Perfil"

  constructor(public navCtrl: NavController) {

  }

}
