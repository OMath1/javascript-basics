const listaPessoal = {
    nome: "Matheus",
    idade: 20,
    email: "matheus@gmail.com",
    telegones: ["11912341234", "11900002222"]
};

// ## acessando arrays 

listaPessoal.telegones.forEach(tel => console.log(tel));

// console.log(listaPessoal.telegones[0]);

// ## Objetos em objetos

listaPessoal.dependenete = {
    nome: "Fulana",
    idade: 19
};

// console.log(typeof listaPessoal.dependenete);

// ## Objetos de arrays

const dispositivo = {
    tipo: "video-game",
    preco: 1234,
    lancamento: 2011,
    precoReparo: 800,
    statusPago: false,

    dono: {
        nome: "fulano",
        idDono: "412"
    },
    reparosFeitos: [{
        anoReparo: 2013,
        reparoFeito: 100
    }],

    pagar:function(valor) {
        this.precoReparo -= valor;
        if (this.precoReparo === 0) {
            this.statusPago = true;
        } 
        if(this.statusPago !== true) {
            console.log(`Pagamento pendente. Você está devendo: ${dispositivo.precoReparo}`);
        }
    }
}

dispositivo.reparosFeitos.push({
    anoReparo: 2015,
    reparoFeito: 400
})

// console.log(dispositivo);
// console.log(dispositivo.reparosFeitos[1]);

const ultimoConcerto = dispositivo.reparosFeitos.filter(concerto => concerto.anoReparo > 2013);

dispositivo.pagar(400);

console.log(dispositivo);





