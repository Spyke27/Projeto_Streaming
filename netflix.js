"use strict";
exports.__esModule = true;
exports.Netflix = void 0;
var Netflix = /** @class */ (function () {
    function Netflix(titulo, ano, sinopse, genero, duracao, classificacao) {
        this.titulo = titulo;
        this.ano = ano;
        this.sinopse = sinopse;
        this.genero = genero;
        this.classificacao = classificacao;
        this.duracao = duracao;
    }
    Netflix.prototype.mostrar = function () {
        console.log("".concat(this.titulo, "\nLan\u00E7amento").concat(this.ano, "\n\nSINOPSE:\n").concat(this.sinopse, "\n\nDura\u00E7\u00E3o:").concat(this.duracao, " minutos\n\n").concat(this.genero, "\n\nClassifica\u00E7\u00E3o: ").concat(this.classificacao, "anos\n        "));
    };
    return Netflix;
}());
exports.Netflix = Netflix;
