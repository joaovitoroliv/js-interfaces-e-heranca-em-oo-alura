export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }

    // Informação Sensível - Uso de Autenticadores
    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}