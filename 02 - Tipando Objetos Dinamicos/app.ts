// ---- objeto

//interrogação significa opcional
let meuObjeto: { nome?: string, idade?: number} = {
    nome: 'Meu Nome',
    idade: 12
    // genero: 'masculino' -> não posso adicionar atributo que não foi previamente declarado
};


// permite quantas e quaisquer key, só define o tipo do valor
let meuObjeto2: { [key: string]: string } = {
    afaa: '',
    caka: 'fkanfa', 
}