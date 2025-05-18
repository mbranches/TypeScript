import { Pessoa } from './interfaces/pessoa/pessoa.interface'

let pessoa: Pessoa = {
    nome: 'Marcus',
    idade: 17,
    endereco: {
        cidade: "belém",
        rua: "BR"
    },
    telefones: [
        {
            ddd: "91",
            numero: "9820129"
        }
    ]
};

let pessoas: Pessoa[] = [pessoa];

pessoas.forEach(p => console.log(p))