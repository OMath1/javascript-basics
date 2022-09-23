// ----------------------- FOR IN ----------------------- 

const dispositivo = [
    {
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
    },
    {
        tipo: "video-game",
        preco: 1424,
        lancamento: 2015,
        precoReparo: 1000,
        statusPago: false,

        dono: {
            nome: "fulano",
            idDono: "432"
        },
        reparosFeitos: [{
            anoReparo: 2016,
            reparoFeito: 400
        }],
    }, {
        pagar: function (valor) {
            this.precoReparo -= valor;
            if (this.precoReparo === 0) {
                this.statusPago = true;
            }
            if (this.statusPago !== true) {
                console.log(`Pagamento pendente. Você está devendo: ${dispositivo.precoReparo}`);
            }
        }
    }
]

let relatorio = "";

for (let info in dispositivo) {

    if (typeof dispositivo[info] === "object" || typeof dispositivo[info] === "function") {
        continue;
    } else {
        relatorio += `
        ${info} ==> ${dispositivo[info]}
        `;
    }
};

// console.log(relatorio);

// ----------------------- SPREAD OPERATOR -----------------------
// Ele "espalha" os elementos acessados dentro de uma array.



for (let i = 0; i < 2; i++) {
    let listaReparosFeitos = [...dispositivo[i].reparosFeitos];
    console.log(listaReparosFeitos);
}


// console.table(listaReparosFeitos);