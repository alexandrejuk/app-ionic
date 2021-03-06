import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { AboutPage } from './../about/about';
import { AtividadePage } from '../atividade/atividade';
import { HomePage } from '../home/home';
import { ProfilePage } from './../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'tab-page',
  templateUrl: 'tab.html',
})
@IonicPage({
  name: 'TabPage',
})
export class TabPage {

  tab1Root = HomePage;
  tab2Root = AtividadePage;
  tab3Root = ProfilePage;
  tab4Root = AboutPage;
  tab5Root = LoginPage;

  constructor() { }
}
