class Produto{
    constructor(nome, preco, quatidade){
        this.nome = nome
        this.preco = preco
        this.quatidade = quatidade
    }
    calcularPrecoTotal(){
        return console.log("o preço total é " + this.preco * this.quatidade)
    }
    aplicarDesconto(desconto){
        return console.log("O preço com desconto de " + desconto+"% é "+ this.preco * this.quatidade * (100 - desconto)/100 )
    }
}
compra1 = new Produto('bala', 10, 10)
console.table(compra1)
compra1.calcularPrecoTotal()
compra1.aplicarDesconto(10)
