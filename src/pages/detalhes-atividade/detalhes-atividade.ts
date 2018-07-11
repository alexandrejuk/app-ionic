import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  ToastController,
} from 'ionic-angular';

import MessagesAlert from '../../utils/alertMessages';

@Component({
  selector: 'page-detalhes-atividade',
  templateUrl: 'detalhes-atividade.html'
})
@IonicPage({
  name: 'DetalhesAtividadePage',
})
export class DetalhesAtividadePage {

  public title="Detalhes Atividade"
  private messageAlert = MessagesAlert;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
  ) { }


  showPrompt(type) {
    const { title, message, name, placeholder, toast } = this.messageAlert[type];
    const prompt = this.alertCtrl.create({
      title,
      message,
      inputs: [
        {
          name,
          placeholder,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {},
        },
        {
          text: 'Salvar',
          handler: data => {
            this.presentToast(toast);
            console.log(data);
          },
        }
      ]
    });
    prompt.present();
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

}
