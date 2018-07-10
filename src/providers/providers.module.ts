import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApikeyReqInject } from '../utils/ApiKeyRequestInjector';
import { AtendimentoProvider } from './atendimento.provider';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    File,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyReqInject,
      multi: true,
    },
    AtendimentoProvider,
  ],
})
export class ProvidersModule {}
