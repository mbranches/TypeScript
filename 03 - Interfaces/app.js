var pessoa = {
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
var pessoas = [pessoa];
pessoas.forEach(function (p) { return console.log(p); });
