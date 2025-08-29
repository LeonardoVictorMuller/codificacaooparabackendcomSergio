class Circulo{
    constructor(raio){
        this.raio = raio
    }
    calcularArea(){
        return console.log("a area é " + ( this.raio * this.raio *Math.PI ))
    }
    calcularPerimetro(){
        return console.log("o perimetro é " +(2*this.raio*Math.PI) )
    }
    
}
const circulo1 = new Circulo(5)
circulo1.calcularArea()
circulo1.calcularPerimetro()