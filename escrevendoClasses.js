// 3️⃣ Escrevendo as classes de um Jogo

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        // Definindo ataque com base no tipo
        if (tipo === "ninja") {
            this.ataque = "shuriken";
        } else if (tipo === "mago") {
            this.ataque = "magia";
        } else if (tipo === "guerreiro") {
            this.ataque = "espada";
        } else if (tipo === "monge") {
            this.ataque = "artes marciais";
        } else {
            this.ataque = "punhos";
        }
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.ataque}`;
    }
}

// Criando o herói
const sasuke = new Heroi("Sasuke Uchiha", 17, "ninja");

const merlin = new Heroi("Merlin", 3000, "mago");

console.log(sasuke.atacar());
console.log(merlin.atacar());