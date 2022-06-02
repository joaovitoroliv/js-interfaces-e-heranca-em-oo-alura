import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import {ContaPoupanca} from './ContaPoupanca.js';
import {Conta} from './Conta.js';

// Criação do Cliente e suas contas
const cliente1 = new Cliente("Ricardo", 11122233345);
const contaCorrenteRicardo = new Conta("corrente", 400, cliente1, 1001);
const contaPoupanca = new Conta("poupanca", 50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)




