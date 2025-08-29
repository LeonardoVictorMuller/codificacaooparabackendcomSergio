class Animal{
    constructor(nome, especie, som){
        this.nome = nome
        this.especie = especie
        this.som = som
    }
    fazerSom(){
        return console.log(this.som)
    }
    apresentar(){
        return console.log("o animal é "+this.nome+" a especie é "+ this.especie)
    }
}
const animal1 = new Animal('andre','humanada','aiaiaiaiaiaiaiaiaiaiiaiaaiaiaiiaiaiaiaiaiaiia')
console.table(animal1)
animal1.fazerSom()
animal1.apresentar()