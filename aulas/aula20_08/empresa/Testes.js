import { Cliente } from "./Cliente.js";
import { Funcionario } from "./Funcionario.js";
import { Pessoa } from "./Pessoa.js";

// let p1 = new Pessoa("Ana", "Vitoria", "ana@uol.com", '08/06/2000');
// console.log(p1.getNomeCompleto())

// let f1 = new Funcionario("Maria", "Cecilia", "mc@senai.br", "16/10/2007", "Analista de Sitemas", 12546)
// console.log(f1.participarDeReuniao())

let c1 = new Cliente("Andre", "gustavo", "AG@gmail.com", "27/07/2005", 800)
console.log(c1.comprar())
console.log(c1.comprarValor(50))