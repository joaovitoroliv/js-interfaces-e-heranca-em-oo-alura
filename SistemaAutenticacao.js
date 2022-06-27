/*
Ser autenticável significa ter um método 'autenticar'
*/ 
// Aprendendo POLIMORFISMO: Tratar objetos diferentes, de maneiras similares
// Passamos um Diretor, um Gerente e um Cliente para o nosso Sistema de Autenticação e deu tudo certo
// Conceito de Interface introduzido 

// Polimorfismo/DuckType: 'o que me interessa é se o objeto possui os métodos e propriedades que eu necessito, pouco importa o seu tipo.'
// OBS: bastante utilizado em linguagens fracamente tipadas

// Encapsulamento: devemos sempre proteger o máximo possível as nossas propriedades e atributos que são sensiveis a nossa Classe.
// OBS: Uso de Assessores Get e Set.
export class SistemaAutenticacao{
    // Método estático login
    static login(autenticavel, senha){
        // Temos que ter a interface/método autenticar para autenticar
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    // Verificar se a chave existe dentro o objeto e se é uma instancia de uma Função
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}