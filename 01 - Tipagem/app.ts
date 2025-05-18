//              tipos


// ------String
let varString: string = "Olá mundo!";
let varStringTipadaPeloTS = "oi";
// varStringTipadaPeloTS = 0; -> da error
let varStringViaConstrutor = new String("Olá"); // -> Objeto do tipo String
console.log(varStringViaConstrutor);


// ------Number
let varNumberInferidaAutomaticamente = 919;
console.log(typeof varNumberInferidaAutomaticamente);

let varNumber: number = 99;


// -----Boolean
let varBoolean: boolean = false;
console.log(varBoolean);


// -----Array
let varArray: string[] = ['meu', 'array'];

let arrayDeTudo: any[] = ['string', 9, false];
console.log(Array.isArray(arrayDeTudo));


// -----Any
let varAny: any = 99;
varAny = false;
varAny = 'ok';

console.log(typeof varAny); // -> retorna o tipo do valor atual da variável