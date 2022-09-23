function Cliente (nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const matheus = new Cliente("Matheus", "11122233344", "matheus@email.com", 100);

matheus.depositar(100);

function ClientePoupanca (nome, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const matheusa = new ClientePoupanca("Matheusa", "11122233344", "matheus@email.com", 100, 400);

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    this.saldoPoupanca += valor;
}

matheusa.depositarPoupanca(400);


console.log(matheusa);