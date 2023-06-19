"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
// cliente/Conta.ts
var Conta = /** @class */ (function () {
    function Conta(id, saldo) {
        this.id = id;
        this.saldo = saldo;
    }
    Conta.prototype.credito = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.debito = function (valor) {
        this.saldo -= valor;
    };
    return Conta;
}());
exports.Conta = Conta;
