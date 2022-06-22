let nome = document.getElementById("nome") as HTMLInputElement;
let idade = document.getElementById("idade") as HTMLInputElement;
let cidade = document.getElementById("cidade") as HTMLInputElement;
let profissao = document.getElementById("profissao") as HTMLInputElement;
let btn = document.getElementById("btn");

interface Ipessoa {
  nome: string,
  idade: number,
  cidade: string,
  profissao?: string
}

class Pessoa{
  public nome: string
  public idade: number
  public cidade: string
  public profissao?: string
  
  constructor({nome , idade, cidade, profissao}: Ipessoa) { 
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.profissao = profissao;
  }
}

function createPessoa(pessoa: Ipessoa): Pessoa{
  return new Pessoa(pessoa);
}

function emptyInputs(): void{
  nome.value = '';
  idade.value = '';
  cidade.value = '';
  profissao.value = '';
}

function createDiv(pessoa: Ipessoa): void{
  const div = document.createElement('div');
 
  const h1 = document.createElement('h1');
  h1.innerHTML ="Informaçao da pessoa: " + pessoa.nome;

  const idade = document.createElement('p');
  idade.innerHTML ="Idade: " + pessoa.idade;

  const cidade = document.createElement('p');
  cidade.innerHTML ="Cidade: " + pessoa.cidade;

  const profissao = document.createElement('p');
  profissao.innerHTML ="Profissão: " + pessoa.profissao;

  div.appendChild(h1);
  div.appendChild(idade);
  div.appendChild(cidade);
  div.appendChild(profissao);

  div.classList.add("info");

  document.body.appendChild(div)
}

btn?.addEventListener('click', () => {
  if(nome.value == '' || nome.value == undefined || +idade.value === undefined || cidade.value === undefined || cidade.value === ''){
    if(document.body.querySelectorAll("div").length >= 3){
      document.body.querySelectorAll("div")[2].style.display = "none";
    }
    return;
  }

  const p: Ipessoa = {
    nome: nome.value,
    idade: +idade.value,
    cidade: cidade.value,
    profissao: profissao.value || "Desempregado"
  }
  
  emptyInputs();
  createDiv(createPessoa(p));
})



