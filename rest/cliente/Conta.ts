// cliente/Conta.ts
export class Conta {
    constructor(public id: number, public saldo: number) {}
  
    credito(valor: number): void {
      this.saldo += valor;
    }
  
    debito(valor: number): void {
      this.saldo -= valor;
    }
  }