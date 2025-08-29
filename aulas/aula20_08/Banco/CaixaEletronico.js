import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Poupanca } from "./Poupanca.js";

let c1 = new ContaCorrente(1234, 12, "andre", 800, 500)
console.log(c1.saque(600))
console.log(c1.pix(600))
console.log(c1.dep(200))
console.log(c1.getSaldo())

addFuncionario(c1)