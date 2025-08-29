import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{
    #funcao
    #matricula
    constructor(nome, sobrenome, email, dataNasc, funcao, matricula){
        super(nome, sobrenome, email, dataNasc)
        this.#funcao = funcao;
        this.#matricula = matricula;
    }
    getFuncao(){
        return this.#funcao
    }
    setFuncao(funcao){
        this.#funcao = funcao
    }
    getMatricula(){
        return this.#matricula
    }
    setMatricula(matricula){
        this.#matricula = matricula
    }
    fazerIntervalo(){
        return `${this.getNomeCompleto()} está no intervalo.`
    }
    participarDeReuniao(){
        return `${this.getNomeCompleto()} está em reunião.`
    }
}