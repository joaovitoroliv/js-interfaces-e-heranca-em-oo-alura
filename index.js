import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

// Criação do Cliente e suas contas
const cliente1 = new Cliente("Ricardo", 11122233345);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// Quero proibir esse comportamento - Usamos classes abstratas para isso, ir para Conta.js
// const conta = new Conta(0, cliente1, 1001);
// console.log(conta);
const Joao = new Cliente("João", 11122219000);
const ContaJoao = new ContaSalario(Joao);
ContaJoao.depositar(100);
ContaJoao.sacar(10);
console.log(ContaJoao);





