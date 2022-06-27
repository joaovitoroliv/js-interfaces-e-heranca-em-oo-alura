export class Conta{
  constructor(saldoInicial, cliente, agencia){
    // Inicializar propriedades sempre como privadas! Se precisar abrir, fazer com um acessor set
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
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
    let taxa = 1;
    return this._sacar(valor, taxa);
  }

  // Método privado - sacar != _sacar
  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } // Saldo insuficiente
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
  testeHerdado(){
    console.log("teste herdado da classe conta")
  }
}