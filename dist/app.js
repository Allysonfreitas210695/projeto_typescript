"use strict";
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let cidade = document.getElementById("cidade");
let profissao = document.getElementById("profissao");
let btn = document.getElementById("btn");
class Pessoa {
    constructor({ nome, idade, cidade, profissao }) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.profissao = profissao;
    }
}
function createPessoa(pessoa) {
    return new Pessoa(pessoa);
}
function emptyInputs() {
    nome.value = '';
    idade.value = '';
    cidade.value = '';
    profissao.value = '';
}
function createDiv(pessoa) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Informaçao da pessoa: " + pessoa.nome;
    const idade = document.createElement('p');
    idade.innerHTML = "Idade: " + pessoa.idade;
    const cidade = document.createElement('p');
    cidade.innerHTML = "Cidade: " + pessoa.cidade;
    const profissao = document.createElement('p');
    profissao.innerHTML = "Profissão: " + pessoa.profissao;
    div.appendChild(h1);
    div.appendChild(idade);
    div.appendChild(cidade);
    div.appendChild(profissao);
    div.classList.add("info");
    document.body.appendChild(div);
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    if (nome.value == '' || nome.value == undefined || +idade.value === undefined || cidade.value === undefined || cidade.value === '') {
        if (document.body.querySelectorAll("div").length >= 3) {
            document.body.querySelectorAll("div")[2].style.display = "none";
        }
        return;
    }
    const p = {
        nome: nome.value,
        idade: +idade.value,
        cidade: cidade.value,
        profissao: profissao.value || "Desempregado"
    };
    emptyInputs();
    createDiv(createPessoa(p));
});
