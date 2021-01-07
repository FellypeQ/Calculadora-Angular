import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private numero1: number;
  private numero2: number;
  private operador: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = 0;
    this.numero2 = 0;
    this.operador = '';
    this.resultado = 0;
  }

  adicionaNumero(numero: number): void {
    this.operador === '' ? (this.numero1 = numero) : (this.numero2 = numero);
  }
  adicionaOperador(operador: string): void {
    this.operador = operador;
  }

  calculaResultado(): void {
    this.resultado = this.calculadoraService.calcular(
      this.numero1,
      this.numero2,
      this.operador
    );
  }

  teste(): void {
    console.log('teste');
  }
}
