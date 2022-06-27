import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';
// Ctrl + D para encontrar próximas referencias

// Aprendendo Polimorfismo
const diretor = new Diretor("Rodrigo", 10000, 12345678945602);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678945601);
gerente.cadastrarSenha("098765");
const cliente = new Cliente("Lais", 12345678991, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "098765");
console.log(gerenteEstaLogado, diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4456");
console.log(clienteEstaLogado);