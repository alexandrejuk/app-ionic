import { ComponentsModule } from './../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutModule } from './about/about.module';
import { AtividadeModule } from './atividade/atividade.module';
import { DetalhesAtendimentoModule } from './detalhes-atendimento/detalhes-atendimento.module';
import { DetalhesAtividadeModule } from './detalhes-atividade/detalhes-atividade.module';
import { FotoModule } from './foto/foto.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { TabPageModule } from './tab/tab.module';


@NgModule({
  imports:[
    AboutModule,
    AtividadeModule,
    ComponentsModule,
    DetalhesAtendimentoModule,
    DetalhesAtividadeModule,
    FotoModule,
    HomeModule,
    LoginModule,
    ProfileModule,
    RelatorioModule,
    TabPageModule,
    ReactiveFormsModule,
    IonicPageModule,
  ],
})

export class PagesModule {

}
