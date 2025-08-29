export class Conta {
    #num
    #agencia
    #cliente
    #saldo
    constructor(num, agencia, cliente, saldo) {
        this.#num = num
        this.#agencia = agencia
        this.#cliente = cliente
        this.#saldo = saldo
    }
    getSaldo(){
        return this.#saldo
    }
    setSaldo(valor){
        this.#saldo = valor
    }
    saque(valor){
        this.#saldo = this.#saldo - valor
        return this.saldo + " é seu saldo atual "
    }
    dep(valor){
        this.#saldo = this.#saldo + valor
        return this.#saldo + " é seu saldo atual "
    }
}