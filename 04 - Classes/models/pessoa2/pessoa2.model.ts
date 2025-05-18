import { Endereco2 } from "./endereco2.model";
import { Telefone2 } from "./telefone2.model";

export class Pessoa2 {
    nome: string;
    idade: number;
    endereco: Endereco2;
    telefones: Telefone2[]

    constructor(nome: string, idade: number, endereco: Endereco2, telefones: Telefone2[]) {
        this.nome = nome;
        this.idade = idade,
        this.endereco = endereco;
        this.telefones = telefones;
    }

    falar() {
        console.log(`Pessoa ${this.nome} está falando.`)
    }
};