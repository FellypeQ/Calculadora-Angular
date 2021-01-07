import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() {}

  calcular(num1: number, num2: number, operador: string): number {
    let resultadoOperacao: number;

    switch (operador) {
      case CalculadoraService.SOMA:
        resultadoOperacao = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultadoOperacao = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultadoOperacao = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultadoOperacao = num1 / num2;
        break;
      default:
        resultadoOperacao = 0;
        break;
    }

    return resultadoOperacao;
  }
}
