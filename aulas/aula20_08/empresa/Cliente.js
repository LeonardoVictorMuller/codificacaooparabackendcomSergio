import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    #renda
    
    constructor(nome, sobrenome, email, dataNasc, renda){
        super(nome, sobrenome, email, dataNasc)
        this.#renda = renda;
    }
    getRenda(){
        return this.#renda;
    }
    setRenda(renda){
        this.#renda = renda
    }

    comprar(){
        return this.getNomeCompleto() + " fez uma compra"
    }
    comprarValor(valor){
        this.#renda = this.#renda - valor
        return ("o valor da compra foi de " + valor + " reais, e seu saldo ficou " + this.#renda )
    }
}