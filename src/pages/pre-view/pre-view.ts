import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

import { AssinaturaPage } from "./../assinatura/assinatura";

@Component({
  selector: "page-pre-view",
  templateUrl: "pre-view.html"
})
@IonicPage({
  name: "PreViewPage"
})
export class PreViewPage {

  public title = "Visualização Relatório";
  public pages = {
    AssinaturaPage
  };

  constructor(public navCtrl: NavController) { }

  goToSignature() {
    this.navCtrl.push(this.pages.AssinaturaPage);
  }
}
