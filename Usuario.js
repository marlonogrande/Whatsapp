"use strict";
exports.__esModule = true;
var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.username = username;
        this.grupos = new Array();
    }
    Usuario.prototype.getName = function () {
        return this.username;
    };
    Usuario.prototype.addGrupo = function (chat) {
        this.grupos.push(chat);
    };
    Usuario.prototype.getChats = function () {
        var res = "[";
        for (var _i = 0, _a = this.grupos; _i < _a.length; _i++) {
            var g = _a[_i];
            res += g.getNome() + " ";
        }
        res += "]";
        return res;
    };
    Usuario.prototype.notify = function () {
        var res = "[ ";
        for (var _i = 0, _a = this.grupos; _i < _a.length; _i++) {
            var g = _a[_i];
            res += g.notify(this.username) + " ";
        }
        res += "]";
        return res;
    };
    Usuario.prototype.getGrupos = function () {
        return this.grupos;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
