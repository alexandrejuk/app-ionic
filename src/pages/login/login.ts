import { Component } from '@angular/core';
import {
  NavController,
  IonicPage,
  ToastController,
} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
@IonicPage({
  name: 'LoginPage',
})
export class LoginPage {

  public username = '';
  public password = '';

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) { }

  public sendLogin() {

    this.presentToast()
  }

  public setData(e) {
    if(e.name === 'password') return this.password = e.value;
    return this.username = e.value;
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Usuário ou senha inválidos!',
      duration: 2000,
    });
    toast.present();
  }

}
