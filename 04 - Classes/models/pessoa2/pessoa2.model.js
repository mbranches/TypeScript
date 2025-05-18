"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa2 = void 0;
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, idade, endereco, telefones) {
        this.nome = nome;
        this.idade = idade,
            this.endereco = endereco;
        this.telefones = telefones;
    }
    Pessoa2.prototype.falar = function () {
        console.log("Pessoa ".concat(this.nome, " est\u00E1 falando."));
    };
    return Pessoa2;
}());
exports.Pessoa2 = Pessoa2;
;
