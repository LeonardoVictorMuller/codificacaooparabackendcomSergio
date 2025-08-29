import { Conta } from "./Conta.js"; 

export class Poupanca extends Conta{
    #dataNiver
    constructor(num, agencia, cliente, saldo, dataNiver) {
    super(num, agencia, cliente, saldo)
    this.#dataNiver = dataNiver
    }
    saque(valor){
        if(saldo > valor ){
        return this.setSaldo(this.getSaldo() - valor)
        }else{ throw new Error("Ou o saldo é insuficiente ")}
    }
}