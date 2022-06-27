/*
Ser autenticável significa ter um método 'autenticar'
*/ 
// Conceito de Interface introduzido
export class SistemaAutenticacao{
    // Método estático login
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}