// entrada de dados
const input = require('readline-sync')

class Heroi{
    ataque ="";

    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "mago"){
            this.ataque = "magia";

        }else if(this.tipo === "guerreiro"){
            this.ataque = "espada";

        }else if(this.tipo === "monge"){
            this.ataque = "artes maciais";

        }else if (this.tipo === "ninja"){
            this.ataque = "shuriken";

        }else{
            this.tipo = `- ${this.tipo} - é um tipo inválido!`;
            this.ataque = "Ataqie Inválido";
        }

        //Saída
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

//Laço de repetição para crian n herois, até que o usuário digite 'n'
do{
    let nome = input.question('Nome do Heroi: ');
    let idade = input.questionInt('Idade do Heroi: ');
    let tipo = input.question('Informe o tipo do heroi [Mago, Guerreiro, Monge ou Ninja]: ');

    let heroi = new Heroi (nome,idade,tipo.toLowerCase());
    heroi.atacar();

    let sair = input.question('Você deseja criar um novo heroi? [s/n]: ');

    if(sair.toLowerCase() === 'n')
    break;
}while(true);
