import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    #limite
    constructor(num, agencia, cliente, saldo, limite) {
        super(num, agencia, cliente, saldo)
        this.#limite = limite
    }
    saque(valor){
        this.setSaldo(this.getSaldo() - valor)
        return `Seu saldo é ${this.getSaldo()}`
    }
    pix(valor){
        if(valor <= this.#limite){
        this.setSaldo(this.getSaldo() - valor)
        return `Seu saldo é ${this.getSaldo()}`
        }
        else{
            return "Limite do pix extrapulado"
        }
    }
}