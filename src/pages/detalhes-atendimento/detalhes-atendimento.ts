import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  FabContainer,
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

  goToPage(page, id, fab) {
    this.navCtrl.push(this.pages[page], { id });
    fab.close();
  }

  actionAtendimento() {
    this.presentToast('Deslocamento Iniciado 🎉')
  }

  showPrompt(type, id, fab) {
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
    fab.close();
  }



  presentToast(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

}
