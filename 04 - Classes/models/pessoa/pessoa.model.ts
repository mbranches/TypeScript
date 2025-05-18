import { Endereco } from './endereco.model'
import { Telefone } from './telefone.model'

export class Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;
    telefones: Telefone[]
};