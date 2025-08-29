class ContaBancaria{
    constructor(numeroDaConta, nomeDoTitular,saldo){
        this.numeroDaConta = numeroDaConta
        this.nomeDoTitular = nomeDoTitular
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo = this.saldo + valor
        return console.log("voce depositou " + valor)
    }
    sacar(valor){
        this.saldo = this.saldo - valor
        return console.log("voce sacou " + valor)
    }
    exibirSaldo(){
        return console.log("Seu saldo é " + this.saldo)
    }
}
const banco1 = new ContaBancaria(12345678, 'leonardo', 1500)
banco1.depositar(20)
console.table(banco1)
banco1.sacar(10)
console.table(banco1)
banco1.exibirSaldo()