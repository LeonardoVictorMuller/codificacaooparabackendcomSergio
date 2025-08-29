class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    calcularDesconto(){
        throw new Error("Método calculaDesconto deve ser obrigatório!")
    }
}

class ProdutoEletronico extends Produto{
    constructor(nome, preco, garantiaMeses){
        super(nome, preco)
        this.garantiaMeses = garantiaMeses;
    }
    calcularDesconto(){
        return this.preco * 0.2
    }
}

class ProdutoAlimenticio extends Produto{
    constructor(nome, preco, validadeDias){
        super(nome, preco)
        this.validadeDias = validadeDias;
    }
    calcularDesconto(){
        return this.preco * 0.1
    }
}

function aplicarDesconto(produto){
    const desconto = produto.calcularDesconto()
    const precoComDesconto = produto.preco - desconto
    console.log(`Preço com desconto para ${produto.nome}: R$ ${precoComDesconto.toFixed(2)}`)
}

const tablet = new ProdutoEletronico("tablet", 1000, 10)
aplicarDesconto(tablet)

// p1 = new Produto("tablet", 1000)
// console.log(p1.nome + " - " + p1.calcularDesconto())

// p2 = new ProdutoEletronico("tablet", 1000, 6)
// console.log(p2.nome + " - " + p2.calcularDesconto())

// p3 = new ProdutoAlimenticio("Pizza", 100, 5)
// console.log(p3.nome + " - " + p3.calcularDesconto())
