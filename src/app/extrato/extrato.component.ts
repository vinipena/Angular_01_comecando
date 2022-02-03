import { Tranferencia } from './../models/tranferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias  : any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
   this.service.todas().subscribe((transferencias: Tranferencia[]) => {
     console.table(transferencias);
     this.transferencias = transferencias;
   })
  }

}
