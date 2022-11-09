const nome = 'Thiago'; // const não muda nunca!!!

// ------------------------------------------------------------------------------------------------

let idade = 29; // Global, local e bloco
var sobrenome = 'Gasparini'; // Global e local

// Global - Fora do Escopo
// Local - Dentro de função por exemplo - não acessível fora da função!!!
// Bloco - apenas o 'let' tem escopo de bloco
// Bloco - usando let, não é possivel acessar variavel criada dentro de um bloco {}
// poreḿ, usando var é possível acessar variavel criada dentro de um bloco {}

// essa é a diferença entre var e let

// --------------------------------------------------------------------------------------------------

// parâmetros opcionais - utilizados sempre depois dos parametros obrigatórios!!!

function soma(a = 20, b = 20) {
  console.log(a + b);
}

soma(10); // resultado = 30
soma(); // resultado = 40
soma(10, 5); // resultado = 15

// exemplo bem utilizado com parãmetros opcionais:

function sub(a, b, inverter = false) {
  return inverter ? b - a : a - b;
}
console.log(sub(5, 10, true));

// ---------------------------------------------------------------------------------------------------

// Json encurtados: nao precisa informar o valor

let user = {
  nome,
  idade,
  sobrenome
}

// ---------------------------------------------------------------------------------------------------

// Operador Spread
let nome2 = 'Thiago';
let idade2 = 29;

let empresa = {
  nome: 'Guia do programador',
  cidade: 'São Paulo',
  site: 'guia.com.br',
  email: 'guia@teste.com'
}

let users = {
  nome2,
  idade2,
  ...empresa
}

console.log(users);

// ---------------------------------------------------------------------------------------------------

// Desestruturação

let empresa2 = {
  nome: 'Guia do programador',
  cidade: 'São Paulo',
  site: 'guia.com.br',
  email: 'guia@teste.com'
}

let { cidade } = empresa2
console.log(cidade);

// ---------------------------------------------------------------------------------------------------

// Arrow functions

const somar = (a, b) => {
  return a + b
}

const mult = (b, c) => b * c

console.log(somar(5, 5));
console.log(mult(5, 5));

// ---------------------------------------------------------------------------------------------------

// Find e Filter

let users3 = ['thiago', 'gasparini', 'dev'];

let teste = users3.find(user => user.length > 3) // busca o primeiro elemento true
let teste2 = users3.filter(user => user.length > 3)
console.log(teste);
console.log(teste2);

// ---------------------------------------------------------------------------------------------------

// Template Literals `Facil de Concatenar frases` - permite quebra de linhas também!!!

let nome3 = 'Thiago'
let sobrenome3 = 'Gasparini'
let idade3 = 29

let frase = `Olá meu nome é ${nome3} ${sobrenome3} e tenho ${idade3} anos de idade`
console.log(frase);

