import { Pessoa } from './models/pessoa/pessoa.model'
import { Endereco2 } from './models/pessoa2/endereco2.model';
import { Telefone2 } from './models/pessoa2/telefone2.model';
import { Pessoa2 } from './models/pessoa2/pessoa2.model'


const pessoa: Pessoa = {
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


const pessoa2: Pessoa2 = new Pessoa2(
        'Marcus',
        17,
        { cidade: 'Belém', estado: 'pará' }, 
        []
);

console.log(pessoa2);

const endereco = new Endereco2('Belém', 'Pará');
const telefone = new Telefone2('91', '982016939')

const pessoa3 = new Pessoa2( 'Marcus', 17, endereco, [ telefone ]);
console.log(pessoa3);
pessoa3.falar();
