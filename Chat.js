"use strict";
exports.__esModule = true;
var Chat = /** @class */ (function () {
    function Chat(nome) {
        this.usuarios = new Array();
        this.mensagens = new Array();
        this.nome = nome;
    }
    Chat.prototype.addPessoa = function (usuario) {
        this.usuarios.push(usuario);
        this.mensagens.push(new Array());
        usuario.addGrupo(this);
    };
    Chat.prototype.zap = function (enviou, msg) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getName() != enviou) {
                this.mensagens[i].push("[" + enviou + ": " + msg + "]");
            }
        }
        console.log("");
    };
    Chat.prototype.notify = function (nome) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getName() == nome) {
                return this.nome + "(" + this.mensagens[i].length + ")";
            }
        }
        return this.nome;
    };
    Chat.prototype.ler = function (nome) {
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getName() == nome) {
                for (var _i = 0, _a = this.mensagens[i]; _i < _a.length; _i++) {
                    var s = _a[_i];
                    console.log(s);
                }
                return;
            }
        }
        console.log("Falha: " + nome + " nao está no grupo");
        return;
    };
    Chat.prototype.esta = function (nome) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.getName() == nome) {
                return true;
            }
        }
        return false;
    };
    Chat.prototype.getNome = function () {
        return this.nome;
    };
    Chat.prototype.show = function () {
        var res = "[";
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var u = _a[_i];
            res += u.getName() + " ";
        }
        res += "]";
        return res;
    };
    return Chat;
}());
exports.Chat = Chat;
