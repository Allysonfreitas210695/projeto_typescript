// Resposta 1 e 2
interface Iemployee {
  code: number;
  name: string;
}

// Respostas 3
type definition = {
  persona: Iemployee;
};

// Resposta 1 
const employee1 = {} as Iemployee;
employee1.code = 10;
employee1.name = "Allyson"

// Resposta 2 
const employee2: Iemployee = {
  code: 100,
  name: "Allyson"
}

// Resposta 3
const employee3: definition = {
  persona: {code: 113, name: "Allyson"},
}

// Resposta 4 
const employee4: {code: number, name: string} = {
  code: 111, 
  name: "Allyson Bruno"
}

console.log(employee1);
console.log(employee2);
console.log(employee3.persona);
console.log(employee4);
