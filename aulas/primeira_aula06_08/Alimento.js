export class Alimento{
    ingredientes = []
    #nome
    constructor(calorias, tipo, nome, fabricante, validade, origem){
        this.calorias = calorias
        this.tipo = tipo
        this.#nome = nome
        this.fabricante = fabricante
        this.validade = validade
        this.origem = origem
    }
    prepapar(tipoPreparo){
        return `${this.#nome} é preparado(a) ${tipoPreparo}`
    }
}
const al1 = new Alimento(500, 'salgado', 'farofa de ovo', 'Yoki', '31/12/2025', 'animal')

//console.log(al1.consumir('frita'))
const data = `${new Date().getDate()}/${(new Date().getMonth() + 1 )}/${new Date().getFullYear()}`
const al2 = new Alimento(1200, 'doce', 'Brigadeiro', 'D. Benta', data, 'animal')

console.log(al2.prepapar('cozido'))

al2.ingredientes = ['Leite condensado','Nescau', 'Açucar', 'Margarina']
console.table(al2)
console.log(al2.ingredientes)
// for(al of al2.ingredientes){
//     console.log(al)
// }