"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco2_model_1 = require("./models/pessoa2/endereco2.model");
var telefone2_model_1 = require("./models/pessoa2/telefone2.model");
var pessoa2_model_1 = require("./models/pessoa2/pessoa2.model");
var pessoa = {
    nome: 'Marcus',
    idade: 17,
    endereco: {
        cidade: 'Belém',
        estado: 'Pará'
    },
    telefones: [
        {
            ddd: '91',
            numero: '231312231'
        }
    ]
};
console.log(pessoa);
var pessoa2 = new pessoa2_model_1.Pessoa2('Marcus', 17, { cidade: 'Belém', estado: 'pará' }, []);
console.log(pessoa2);
var endereco = new endereco2_model_1.Endereco2('Belém', 'Pará');
var telefone = new telefone2_model_1.Telefone2('91', '982016939');
var pessoa3 = new pessoa2_model_1.Pessoa2('Marcus', 17, endereco, [telefone]);
console.log(pessoa3);
pessoa3.falar();
