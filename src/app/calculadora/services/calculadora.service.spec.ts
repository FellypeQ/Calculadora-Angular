import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('random sum 0 a 1000', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let num1 = Math.random() * 1000;
      let num2 = Math.random() * 1000;
      let soma = service.calcular(num1, num2, '+');
      expect(soma).toEqual(num1 + num2);
    }
  ));
  it('random subtration 0 a 1000', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let num1 = Math.random() * 1000;
      let num2 = Math.random() * 1000;
      let soma = service.calcular(num1, num2, '-');
      expect(soma).toEqual(num1 - num2);
    }
  ));
  it('random multiplication 0 a 1000', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let num1 = Math.random() * 1000;
      let num2 = Math.random() * 1000;
      let soma = service.calcular(num1, num2, '*');
      expect(soma).toEqual(num1 * num2);
    }
  ));
  it('random division 0 a 1000', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let num1 = Math.random() * 1000;
      let num2 = Math.random() * 1000;
      let soma = service.calcular(num1, num2, '/');
      expect(soma).toEqual(num1 / num2);
    }
  ));
});
