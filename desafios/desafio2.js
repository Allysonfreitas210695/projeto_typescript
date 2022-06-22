// Como podemos melhorar o esse código usando TS? 
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["atriz"] = 0] = "atriz";
    Trabalho[Trabalho["padeiro"] = 1] = "padeiro";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.padeiro
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
