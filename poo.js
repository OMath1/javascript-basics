class Cliente {
    constructor (nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const novoCliente = new Cliente("matheus", "math@email.com", "11122233344", 110);

novoCliente.depositar(500);

novoCliente.exibirSaldo();

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const otha = new ClientePoupanca("otha", "a@email.com", "22233344455", 200, 300);

console.log(otha);

otha.depositar(300);
otha.depositarPoupanca(100);

console.log(otha);
