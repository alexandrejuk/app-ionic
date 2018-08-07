import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutModule } from './about/about.module';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { AtividadeModule } from './atividade/atividade.module';
import { ComponentsModule } from './../components/components.module';
import { DetalhesAtendimentoModule } from './detalhes-atendimento/detalhes-atendimento.module';
import { DetalhesAtividadeModule } from './detalhes-atividade/detalhes-atividade.module';
import { EquipmentModule } from './equipment/equipment.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PecasModule } from './pecas/pecas.module';
import { PreViewModule } from './pre-view/pre-view.module';
import { ProfileModule } from './profile/profile.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { RetirarModule } from './retirar/retirar.module';
import { SoftwareModule } from './software/software.module';
import { TabPageModule } from './tab/tab.module';

@NgModule({
  imports:[
    AboutModule,
    AssinaturaModule,
    AtividadeModule,
    ComponentsModule,
    DetalhesAtendimentoModule,
    DetalhesAtividadeModule,
    EquipmentModule,
    HomeModule,
    IonicPageModule,
    LoginModule,
    PecasModule,
    PreViewModule,
    ProfileModule,
    RelatorioModule,
    RetirarModule,
    ReactiveFormsModule,
    SoftwareModule,
    TabPageModule,
  ],
})

export class PagesModule { }
