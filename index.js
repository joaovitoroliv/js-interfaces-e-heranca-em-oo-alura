import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Ricardo", 11122233345);
const cliente2 = new Cliente('Alice', 88899933309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const contaCorrenteAlice = new ContaCorrente(101, cliente2);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)

// Contabilizar o numero de contasCorrentes com atributo estático
console.log(ContaCorrente.numeroDeContas)
// console.log(cliente1)
// console.log(cliente1)
console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)


