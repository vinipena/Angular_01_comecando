import { Tranferencia } from './../models/tranferencia.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//o decorato injectable, injeta uma instancia da classe Service gerada
//sem que seja necessario instanciar a classe inteira
@Injectable({
  //Esse input nos diz que para o service ele é provido pela aplicação toda
  //em versões mais antigas seria necessario declarar em "app.module.ts"
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }
  todas():Observable<Tranferencia[]> {
    return this.httpClient.get<Tranferencia[]>(this.url);
  }
  adicionar(transferencia: Tranferencia):Observable<Tranferencia> {
    this.hidratar(transferencia);
   return this.httpClient.post<Tranferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
