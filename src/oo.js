// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico'

console.log(pikachu);
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);