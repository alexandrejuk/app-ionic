import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';

@Component({
  selector: 'page-software',
  templateUrl: 'software.html'
})
@IonicPage({
  name: 'SoftwarePage',
})
export class SoftwarePage {


  public dropDown = {
    treinamento: false,
  };

  public softwares = [
   { id: 1, name: 'SECULLUM ACESSO.NET' },
   { id: 2, name: 'SECULLUM ACESSO' },
   { id: 3, name: 'SECULLUM ACADEMIA' },
   { id: 4, name: 'SECULLUM REFEITÓRIO' },
   { id: 5, name: 'INSPELL' },
   { id: 6, name: 'FLEXTIME 6' },
   { id: 7, name: 'FLEXTIME JR' },
   { id: 8, name: 'IPONTO 3' },
   { id: 9, name: 'PONTO SECULLUM 4' },
   { id: 10, name: 'PONTO SECULLUM 4 CLOUD' },
   { id: 11, name: 'SISTEMA HENRY 7X' },
   { id: 12, name: 'COLETOR KURUMIM' },
   { id: 13, name: 'CLREP' },
   { id: 14, name: 'TOP RONDA VIGIA' },
   { id: 15, name: 'TOP ACESSO' },
   { id: 16, name: 'PROGRAMADOR KURUMIM' },
   { id: 17, name: 'REP WEB' }
  ];

  public treinamentoContent = [
    'Abonos',
    'Backup',
    'Banco Horas',
    'Cadastros',
    'Hora Extra',
    'Importação',
    'Instalação',
    'Justificativas',
    'Parâmetros',
    'Relatórios',
  ]

  public software;

  public title="Software"

  constructor(public navCtrl: NavController) { }

  softwareChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  onDropDown = type =>
    this.dropDown = { ...this.dropDown, [type]: !this.dropDown[type] };
}
