"use strict";
// Tipos implicitos
var nome = 'Giba';
console.log('nome', nome);
var idade = 33;
console.log('idade', idade);
var possuiHobbies = true;
console.log('possuiHobbies', possuiHobbies);
// Tipos explicitos
var giba = 'Giba';
console.log('giba', typeof giba, giba);
var age = 33;
console.log('age', typeof age, age);
var hobbie = true;
console.log('hobbies', typeof hobbie, hobbie);
var hobbies = ['Tenis', 'Futebol', 'Bicicleta'];
console.log(typeof hobbies, hobbies);
// tuplas
var address = ["Rua Goiana", 1253, 401];
console.log(address, typeof address);
// Enums
var cores;
(function (cores) {
    cores[cores["Cinza"] = 0] = "Cinza";
    cores[cores["Verde"] = 100] = "Verde";
    cores[cores["Azul"] = 101] = "Azul";
})(cores || (cores = {}));
var minhaCor = cores.Verde;
console.log(cores);
// Functions
function myName() {
    return nome;
}
console.log(myName());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplay(numA, numB) {
    return numA * numB;
}
console.log(multiplay(9, 2));
// Type Function
var calculo;
calculo = multiplay;
console.log(calculo(30, 5));
// Objetos
var user = {
    name: 'Joao',
    age: 33
};
// Desaio 01
var baterPonto = function (ponto) {
    if (ponto <= 8) {
        return 'Ponto normal';
    }
    else {
        return 'Fora do horario';
    }
};
var funcionario = {
    supervisores: ['Giba', 'Paula', 'Paulo'],
    ponto: 8
};
console.log(funcionario.supervisores);
console.log(baterPonto(funcionario.ponto));
var funcionarioProfessor = {
    supervisores: ['Anna', 'Fernanda'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horario';
        }
    }
};
console.log('professor', funcionarioProfessor.supervisores);
console.log('professor', funcionarioProfessor.baterPonto(8));
console.log('professor', funcionarioProfessor.baterPonto(9));
// end desafio
// Union types
var nota = 10;
console.log("Minha nota " + nota);
// Checando types no JS
var valor = true;
if (typeof valor === 'number') {
    console.log('E um number');
}
else {
    console.log("E um valor " + typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabao',
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido!');
        }
    }
};
produto.validarProduto();
var altura = 12;
altura = null;
var contato1 = {
    nome: 'Giba',
    phone: '41 987 205 647',
    cellphone: null
};
console.log(contato1);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
