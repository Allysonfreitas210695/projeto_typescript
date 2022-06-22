// Como podemos melhorar o esse código usando TS? 

enum Trabalho{
  atriz,
  padeiro
}

interface Humano {
  nome: string;
  idade: number;
  profissao: Trabalho;
}


let pessoa1: Humano = {
  nome: "Maria",
  idade: 29,
  profissao: Trabalho.atriz,
};

let pessoa2 = {
  nome: "roberto",
  idade: 19,
  profissao: Trabalho.padeiro
} as Humano;


let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.padeiro
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);