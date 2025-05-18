//              tipos
// ------String
var varString = "Olá mundo!";
var varStringTipadaPeloTS = "oi";
// varStringTipadaPeloTS = 0; -> da error
var varStringViaConstrutor = new String("Olá"); // -> Objeto do tipo String
console.log(varStringViaConstrutor);
// ------Number
var varNumberInferidaAutomaticamente = 919;
console.log(typeof varNumberInferidaAutomaticamente);
var varNumber = 99;
// -----Boolean
var varBoolean = false;
console.log(varBoolean);
// -----Array
var varArray = ['meu', 'array'];
var arrayDeTudo = ['string', 9, false];
console.log(Array.isArray(arrayDeTudo));
// -----Any
var varAny = 99;
varAny = false;
varAny = 'ok';
console.log(typeof varAny); // -> retorna o tipo do valor atual da variável
