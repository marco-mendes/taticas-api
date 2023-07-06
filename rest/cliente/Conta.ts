

export class Conta {
    constructor(public id: number, public saldo: number, private limiteCredito: number) {}
  
    credito(valor: number): void {
      this.saldo += valor;
    }
  
    debito(valor: number): boolean {
      if (valor > this._saldo + this._limite) {
          return false;
      }
      this._saldo -= valor;
      return true;
  }
  }
