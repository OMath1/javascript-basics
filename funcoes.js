function soma() {
    return console.log(2 + 2);
}

soma();

// Expressão de função
// Funções sem nomes, elas são anonimas

const somar = function(num1, num2) { return num1 + num2};

console.log(somar(2, 2));

//Arrow function

const lerPalavra = palavra => palavra; 

console.log(lerPalavra("Ui"));

// Quando a fun tem mais de 1 linha é necessário ter chaves e return

const arrowFun = (somar1, somar2) => { return somar1 + somar2 };

console.log(arrowFun(4, 10));

const lukeLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  };

  console.log(lukeLogin())
