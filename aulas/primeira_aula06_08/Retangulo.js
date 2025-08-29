class Retangulo{
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
    calcularArea(){
        return console.log("a area é " + (this.largura * this.altura))
    }
    calcularPerimetro(){
        return console.log("o perimetro é " +(2*this.altura+2*this.largura) )
    }
    
}
const retangu1 = new Retangulo(9 , 8)
retangu1.calcularArea()
retangu1.calcularPerimetro()