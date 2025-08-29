export class Pessoa{
    #nome
    #sobrenome
    #email
    #dataNasc
    constructor(nome, sobrenome, email, dataNasc){
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#dataNasc = dataNasc;
    }

    //Getters & Setters

    getNome(){
        return this.#nome 
    }
    setNome(nome){
        this.#nome = nome
    }
    getSobrenome(){
        return this.#sobrenome 
    }
    setSobreome(sobrenome){
        this.#sobrenome = sobrenome
    }
    getEmail(){
        return this.#email 
    }
    setEmaile(email){
        this.#email = email
    }
    getDataNasc(){
        return this.#dataNasc
    }
    setDataNasc(data){
        this.#dataNasc = data
    }

    getNomeCompleto(){
        return this.getNome() + " " + this.getSobrenome()
    }
}