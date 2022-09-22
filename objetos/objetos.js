// --------------------- Arrays --------------------- 

const listaCPFs = ["42342442244", "12345678900", "09876543211"];
const cliente = ["nome", "matheus", 20];

// --------------------------------------------------


// --------------------- Objetos ---------------------

/* 
 ## Formas possíveis de acesso:

console.log(listaPessoal.nome)
console.log(`Meu nome é ${listaPessoal.nome}`);
console.log(listaPessoal.email.substring(0, 8));
*/

// ## Acessando o valor via a chave;

const chaves = ["nome", "idade", "email"]


// console.log(listaPessoal[chaves[2]]);

// chaves.forEach(info => console.log(listaPessoal[info]));

// ## Adicionando valores: 
const listaPessoal = {
    nome: "Matheus",
    idade: 20,
    email: "matheus@gmail.com"
};

listaPessoal["sexo"] = "masculino";

listaPessoal.telefone = "11911902132";

console.log(listaPessoal)
console.log(listaPessoal["idade"])

// ## Deletando valores: 

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

const chavesDelete = ["aliado", "nivel"]

chavesDelete.forEach(atributo => delete objPersonagem[atributo] );

// delete objPersonagem.aliado

console.log(objPersonagem);

// ## 

const peterParker = {
    funcao: "Estudante",
    parentes: "May Parker",
    interesses: "Ciências"
}
