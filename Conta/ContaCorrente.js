import { Conta } from "./Conta.js"
export class ContaCorrente extends Conta {
  // Atributo estático que será igual para todas as contasCorrente
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    // Herdar Propriedades com super
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }
  teste() {
    // Herdou método teste da classe Conta
    super.testeHerdado();
    console.log("teste na classe contaCorrente")
  }
  // Especialização de Comportamento do método Sacar da Conta Corrente
  // Sobreescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    // Método privado sacar herdado da classe Conta
    return super._sacar(valor, taxa);
  }
}