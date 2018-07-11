import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  ToastController,
} from 'ionic-angular';

import { FotoPage } from './../foto/foto';
import { RelatorioPage } from './../relatorio/relatorio';

import MessagesAlert from '../../utils/alertMessages';

@Component({
  selector: 'page-detalhes-atendimento',
  templateUrl: 'detalhes-atendimento.html'
})
@IonicPage({
  name: 'DetalhesPage',
})
export class DetalhesAtendimentoPage {

  public title="Detalhes Atendimento"

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
  ) { }

  public pages = {
    relatorio: RelatorioPage,
    foto: FotoPage,
  }

  private messageAlert = MessagesAlert;

  goToPage(page, id) {
    this.navCtrl.push(this.pages[page], { id })
  }

  actionAtendimento() {
    this.presentToast('Deslocamento Iniciado 🎉')
  }

  showPrompt(type) {
    const { title, message, name, placeholder, toast = '' } = this.messageAlert[type];
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
