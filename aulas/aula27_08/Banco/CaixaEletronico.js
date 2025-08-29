import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Poupanca } from "./Poupanca.js";

function aplicaSaque(cliente, valor) {
    const saqueRealizado = cliente.saque(valor); // Realiza o saque
    if (saqueRealizado) {
        console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${cliente.getSaldo()}`);
    } else {
        console.log(`Não foi possível realizar o saque de R$${valor}. Saldo insuficiente.`);
    }
}

let c1 = new ContaCorrente(1234, 12, "andre", 800, 500);

aplicaSaque(c1, 400);