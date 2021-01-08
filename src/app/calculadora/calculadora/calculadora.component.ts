import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private operador: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '';
    this.numero2 = '';
    this.operador = '';
    this.resultado = null;
  }

  adicionaNumero(caracter: string): void {
    this.operador === ''
      ? (this.numero1 = this.concatenaNumero(this.numero1, caracter))
      : (this.numero2 = this.concatenaNumero(this.numero2, caracter));
  }
  adicionaOperador(operador: string): void {
    this.operador !== operador
      ? (this.operador = operador)
      : (this.operador = this.operador);
  }
  concatenaNumero(numeroAtual: string, caracter: any): string {
    if (caracter === '0' && numeroAtual === '') {
      numeroAtual = '';
    }
    if (numeroAtual === '' && caracter === '.') {
      return '0.';
    }
    if (caracter === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }
    return numeroAtual + caracter;
  }

  calculaResultado(): void {
    if (this.numero2 !== '') {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operador
      );
    }
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== '') {
      return this.numero2;
    }
    if (this.operador !== '') {
      return this.operador;
    }
    return this.numero1;
  }

  teste(): void {
    console.log('teste');
  }
}
