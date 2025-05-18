import { Endereco } from './endereco.interface';
import { TelefonePessoa } from './telefone-pessoa.interface';

export interface Pessoa {
    nome?: string,
    idade?: number,
    endereco: Endereco,
    telefones: TelefonePessoa[]
}