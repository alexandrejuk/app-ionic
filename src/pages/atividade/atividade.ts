import { Component } from '@angular/core';
import {
  AlertController,
  NavController,
  IonicPage,
  FabContainer,
  ToastController,
} from 'ionic-angular';

import { DetalhesAtividadePage } from './../detalhes-atividade/detalhes-atividade';
import MessagesAlert from '../../utils/alertMessages';

@Component({
  selector: 'page-atividade',
  templateUrl: 'atividade.html'
})
@IonicPage({
  name: 'AtividadePage',
})
export class AtividadePage {

  public title="Atividades"
  private messageAlert = MessagesAlert;

  public atividades = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,

  ) { }


  criarAtividade(tipo: string, action, fab) {
    console.log(fab.close)
    // const atividade = {
    //   _id: this.atividades.length + 1,
    //   descricao: '',
    //   atividade_id: null,
    //   monitoramentos: [],
    //   tipo: tipo,
    //   funcionario_id: 25,
    //   status: 'deslocamento_iniciado',
    //   synced: false,
    // };
    // this.showConfirm(this.messageAlert[action], atividade);
    // fab.close();
    
  }

  presentToast({ message }) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }


  showConfirm({ title, message, toast }, atividade) {
    const confirm = this.alertCtrl.create({
      title,
      message: `${message} ${atividade.tipo}?`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        },
        {
          text: 'Criar',
          handler: () => {
            this.atividades.push(atividade);
            return this.presentToast(toast);
          }
        }
      ]
    });
    confirm.present();
  }

}
