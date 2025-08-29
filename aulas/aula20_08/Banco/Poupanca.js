import { Conta } from "./Conta.js"; 

export class Poupanca extends Conta{
    #dataNiver
    constructor(num, agencia, cliente, saldo, dataNiver) {
    super(num, agencia, cliente, saldo)
    this.#dataNiver = dataNiver
    }
    saque(valor){
        this.setSaldo(this.getSaldo() - valor)
        return `Seu saldo é ${this.getSaldo()}`
    }
}