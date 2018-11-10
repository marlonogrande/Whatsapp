"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Usuario_1 = require("./Usuario");
var Chat_1 = require("./Chat");
var usuarios = new Array();
var chats = new Array();
console.log("\n");
console.log("sair - Sai do programa");
console.log("addusuario - Adiciona um novo usuário");
console.log("mostrar - mostra os usuários cadastrados");
console.log("novochat - Cria um novo chat");
console.log("verchats - Mostra os chats de um usuário");
console.log("convidar - Adiciona um usuário a um chat existente");
console.log("usuarios - Cria um novo chat");
console.log("zap - Envia uma mensagem para um grupo");
console.log("notificaçoes - Checa as notificações de um usuário");
console.log("ler - Mostra as mensagens enviadas em um grupo");
console.log("\n");
var cmd = readline.question("Digite sua escolha: ");
while (cmd != "sair") {
    switch (cmd) {
        case "addusuario": {
            var nome = readline.question("Informe o nome do usuario: ");
            var naoAchado = true;
            for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
                var u = usuarios_1[_i];
                if (u.getName == nome) {
                    naoAchado = false;
                }
            }
            if (naoAchado) {
                usuarios.push(new Usuario_1.Usuario(nome));
            }
            else {
                console.log("Usuario ja cadastrado!");
            }
            break;
        }
        case "mostrar": {
            var res = "[";
            for (var _a = 0, usuarios_2 = usuarios; _a < usuarios_2.length; _a++) {
                var u = usuarios_2[_a];
                res += u.getName() + " ";
            }
            res += "]";
            console.log(res);
            break;
        }
        case "novochat": {
            var nome = readline.question("Digite o nome do usuario a criar o chat: ");
            var chat = readline.question("informe o nome do chat: ");
            var naoAchado = true;
            for (var _b = 0, chats_1 = chats; _b < chats_1.length; _b++) {
                var c = chats_1[_b];
                if (c.getNome() == nome) {
                    naoAchado = false;
                }
            }
            if (naoAchado) {
                var chatAux = new Chat_1.Chat(chat);
                for (var _c = 0, usuarios_3 = usuarios; _c < usuarios_3.length; _c++) {
                    var u = usuarios_3[_c];
                    if (u.getName() == nome) {
                        chatAux.addPessoa(u);
                    }
                }
                chats.push(chatAux);
            }
            else {
                console.log("Falha: chat " + chat + " ja existe!");
            }
            break;
        }
        case "verchats": {
            var nome = readline.question("informe o nome de usuario: ");
            var userAux = void 0;
            var res = "[";
            for (var _d = 0, usuarios_4 = usuarios; _d < usuarios_4.length; _d++) {
                var u = usuarios_4[_d];
                if (u.getName() == nome) {
                    console.log(u.getChats());
                }
            }
            break;
        }
        case "convidar": {
            var nome = readline.question("Informe o nome do usuario a convidar: ");
            var convidado = readline.question("Informe o nome do convidado: ");
            var grupo = readline.question("Informe o nome do grupo: ");
            for (var _e = 0, usuarios_5 = usuarios; _e < usuarios_5.length; _e++) {
                var u = usuarios_5[_e];
                if (u.getName() == nome) {
                    for (var _f = 0, usuarios_6 = usuarios; _f < usuarios_6.length; _f++) {
                        var c = usuarios_6[_f];
                        if (c.getName() == convidado) {
                            for (var _g = 0, chats_2 = chats; _g < chats_2.length; _g++) {
                                var g = chats_2[_g];
                                if (g.getNome() == grupo) {
                                    if (g.esta(u.getName())) {
                                        g.addPessoa(c);
                                        break;
                                    }
                                    else {
                                        console.log("Falha: " + nome + " nao esta no grupo " + grupo);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            break;
        }
        case "usuarios": {
            var chat = readline.question("Informe o nome do chat: ");
            for (var _h = 0, chats_3 = chats; _h < chats_3.length; _h++) {
                var c = chats_3[_h];
                if (c.getNome() == chat) {
                    console.log(c.show());
                }
            }
            break;
        }
        case "zap": {
            var enviou = readline.question("Quem enviou a mensagem: ");
            var destino = readline.question("Qual o grupo:  ");
            var mensagem = readline.question("Qual a mensagem: ");
            for (var _j = 0, chats_4 = chats; _j < chats_4.length; _j++) {
                var c = chats_4[_j];
                if (c.getNome() == destino) {
                    c.zap(enviou, mensagem);
                }
            }
            break;
        }
        case "notificacoes": {
            var usuario = readline.question("De quem deseja ver as notificacoes: ");
            for (var _k = 0, usuarios_7 = usuarios; _k < usuarios_7.length; _k++) {
                var u = usuarios_7[_k];
                if (u.getName() == usuario) {
                    console.log(u.notify());
                    break;
                }
            }
            break;
        }
        case "ler": {
            var nome = readline.question("Nome do usuario: ");
            var grupo = readline.question("Nome do grupo: ");
            for (var _l = 0, chats_5 = chats; _l < chats_5.length; _l++) {
                var c = chats_5[_l];
                if (c.getNome() == grupo) {
                    c.ler(nome);
                    break;
                }
            }
            break;
        }
        case "sair": {
            console.log();
            break;
        }
        default:
            console.log("Comando invalido!");
            break;
    }
    console.log("\n");
    console.log("sair - Sai do programa");
    console.log("addusuario - Adiciona um novo usuário");
    console.log("mostrar - mostra os usuários cadastrados");
    console.log("novochat - Cria um novo chat");
    console.log("verchats - Mostra os chats de um usuário");
    console.log("convidar - Adiciona um usuário a um chat existente");
    console.log("usuarios - Cria um novo chat");
    console.log("zap - Envia uma mensagem para um grupo");
    console.log("notificaçoes - Checa as notificações de um usuário");
    console.log("ler - Mostra as mensagens enviadas em um grupo");
    console.log("\n");
    cmd = readline.question("Digite sua escolha: ");
}
