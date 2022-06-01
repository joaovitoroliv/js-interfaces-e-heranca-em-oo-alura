import { Cliente } from "./Cliente.js"
export class ContaCorrente {
  // Atributo estático que será igual para todas as contasCorrente
  static numeroDeContas = 0;
  agencia;

  // Atributo privados
  _cliente;
  _saldo = 0;

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  set cliente(novoValor) {
    // Quero verificar se o valor de cliente é uma instancia de 'Cliente'
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo
  }



  

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}