import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
@IonicPage({
  name: 'LoginPage',
})
export class LoginPage {

  public title="Perfil"

  constructor(public navCtrl: NavController) {

  }

}
