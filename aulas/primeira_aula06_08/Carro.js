class Carro{
    constructor(marca, modelo, ano, velocidade){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
    }
    acelerar(numero){
        return this.velocidade =  this.velocidade + numero 
    }
    frear(numero){
        return this.velocidade = this.velocidade - numero
    }
    getMarca(){
        return console.log(this.marca)
    }
    getModelo(){
        return console.log(this.modelo)
    }
    getAno(){
        return console.log(this.ano)
    }
}
const carro1 = new Carro('tesla', 'x1', 2000, 60)
console.table(carro1)
carro1.acelerar(20)
console.table(carro1)
carro1.frear(10)
console.table(carro1)

carro1.getAno()

