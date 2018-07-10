import { ComponentsModule } from './../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutModule } from './about/about.module';
import { AtividadeModule } from './atividade/atividade.module';
import { DetalhesModule } from './detalhes/detalhes.module';
import { DetalhesAtividadeModule } from './detalhes-atividade/detalhes-atividade.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { TabPageModule } from './tab/tab.module';


@NgModule({
  imports:[
    AboutModule,
    AtividadeModule,
    ComponentsModule,
    DetalhesModule,
    DetalhesAtividadeModule,
    HomeModule,
    ProfileModule,
    TabPageModule,
    ReactiveFormsModule,
    IonicPageModule,
  ],
})

export class PagesModule {

}
