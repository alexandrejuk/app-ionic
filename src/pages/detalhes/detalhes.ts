import { Component } from '@angular/core';
import {
  NavController,
  IonicPage,
  ToastController,
} from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
@IonicPage({
  name: 'DetalhesPage',
})
export class DetalhesPage {

  public title="Detalhes Atendimento"

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
  ) { }

  actionAtendimento() {
    console.log('ola mundo')
    this.presentToast('Deslocamento Iniciado 🎉')
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

}
