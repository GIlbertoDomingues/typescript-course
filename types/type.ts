// Tipos implicitos

let nome = 'Giba'
console.log('nome', nome)

let idade = 33
console.log('idade', idade)

let possuiHobbies = true
console.log('possuiHobbies', possuiHobbies)

// Tipos explicitos
const giba: string = 'Giba'
console.log('giba', typeof giba, giba )

const age: number = 33
console.log('age', typeof age, age )

const hobbie: boolean = true
console.log('hobbies', typeof hobbie, hobbie )

let hobbies: string[] = ['Tenis', 'Futebol', 'Bicicleta']
console.log(typeof hobbies, hobbies);

// tuplas
let address: [string, number, number] = ["Rua Goiana", 1253, 401]
console.log(address, typeof address);

// Enums
enum cores {
  Cinza,
  Verde = 100,
  Azul
}

let minhaCor: cores = cores.Verde
console.log(cores);

// Functions
function myName(): string {
  return nome
}
console.log(myName())


function digaOi(): void {
  console.log('Oi')
}

digaOi()


function multiplay(numA: number, numB: number):number {
  return numA * numB
}

console.log(multiplay(9,2));

// Type Function
let calculo: (numeroA: number, numneroB: number) => number
calculo = multiplay

console.log(calculo(30, 5));


// Objetos
let user: {name: string, age: number} = {
  name: 'Joao',
  age: 33
}

// Desaio 01
const baterPonto = function(ponto: number ): string {
  if ( ponto <= 8 ) {
    return 'Ponto normal'
  } else {
    return 'Fora do horario'
  }
}

type Funcionario = {
  supervisores: string[],
  ponto: number
}

let funcionario: Funcionario = {
  supervisores: [ 'Giba','Paula', 'Paulo' ],
  ponto: 8
}

console.log(funcionario.supervisores)
console.log(baterPonto(funcionario.ponto))


// Resposta professor
type FuncionarioProfessor = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionarioProfessor: FuncionarioProfessor = {
  supervisores: [ 'Anna', 'Fernanda' ],
  baterPonto ( horario: number ): string {
    if ( horario <= 8 ) {
      return 'Ponto normal'
    } else {
      return 'Fora do horario'
    }
  }
}

console.log('professor', funcionarioProfessor.supervisores);
console.log('professor', funcionarioProfessor.baterPonto(8));
console.log('professor', funcionarioProfessor.baterPonto(9));

// end desafio


// Union types
let nota:number | string = 10
console.log(`Minha nota ${nota}`);


// Checando types no JS
let valor = true

if ( typeof valor === 'number') {
  console.log('E um number');
} else {
  console.log(`E um valor ${typeof valor}`);
}


// Never
function falha(msg: string): never {
  throw new Error(msg)
}


const produto = {
  nome: 'Sabao',
  preco: 1,
  validarProduto() {
  if ( !this.nome || this.nome.trim().length == 0 ) {
    falha('Precisa de um nome')
  }

  if ( this.preco <= 0 ) {
    falha('Preco invalido!')
  }
  }
}

 produto.validarProduto()

 let altura: null | number = 12
 altura = null

type Contato = {
  nome: string,
  phone: string,
  cellphone: string | null,
}

const contato1 : Contato = {
  nome: 'Giba',
  phone: '41 987 205 647',
  cellphone: null
}

console.log(contato1);


// Desafio 02
type Conta = {
  saldo: number,
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: Conta,
  contatos: string[]
}

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
