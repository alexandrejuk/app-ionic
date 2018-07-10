import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import API_URL from '../app/api';
import { Atendimento, Assinatura } from '../models';


@Injectable()
export class AtendimentoProvider {

  private url = `${API_URL}/api/atendimentos`;

  constructor(public http: HttpClient) { }


  lidaComErro(erro: Response | any) {
    let mensagemErro: string;
    if (erro instanceof Response) {
      mensagemErro = `Ocorreu o erro ${erro.status}`;
    } else {
      mensagemErro = erro.toString();
    }
    return Observable.throw(mensagemErro);
  }

}
