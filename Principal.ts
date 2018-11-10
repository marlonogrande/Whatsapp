declare function require(msg: string): any;
var readline = require("readline-sync");

import {Usuario} from "./Usuario";
import { Chat } from "./Chat";

let usuarios = new Array<Usuario>();
let chats = new Array<Chat>();

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

let cmd : string = readline.question("Digite sua escolha: ");
while(cmd != "sair"){
        switch (cmd) {
        case "addusuario": {
            let nome = readline.question("Informe o nome do usuario: ");
            let naoAchado : Boolean = true;
            
            for ( let u of usuarios) {
                if (u.getName == nome) {
                    naoAchado = false;
                }
            }

            if (naoAchado){
                usuarios.push(new Usuario(nome));
            } else {
                console.log("Usuario ja cadastrado!");
            }
            break;
        }
        case "mostrar": {
            let res : String = "["
            for (let u of usuarios){
                res += u.getName() + " ";
            }
            res += "]"
            console.log(res);
        break;
        }
        case "novochat": {
            let nome = readline.question("Digite o nome do usuario a criar o chat: ");
            let chat = readline.question("informe o nome do chat: ");
            let naoAchado : boolean= true;
            for (let c of chats){
                if (c.getNome() == nome){
                    naoAchado = false;
                }
            }

            if (naoAchado){
                let chatAux : Chat = new Chat(chat);
                for (let u of usuarios){
                    if (u.getName() == nome){
                        chatAux.addPessoa(u);
                    }
                }
                chats.push(chatAux);
            } else {
                console.log("Falha: chat " + chat + " ja existe!");
            }
            break;
        }
        case "verchats": {
            let nome : String = readline.question("informe o nome de usuario: ");
            let userAux : Usuario;
            let res : String = "[";
            for (let u of usuarios){
                if (u.getName() == nome) {
                    console.log(u.getChats());
                }
            }
            break;
        }
        case "convidar": {
            let nome : String = readline.question("Informe o nome do usuario a convidar: ");
            let convidado : String = readline.question("Informe o nome do convidado: ");
            let grupo : String = readline.question("Informe o nome do grupo: ");

            for (let u of usuarios) {
                if (u.getName() == nome) {
                    for (let c of usuarios) {
                        if (c.getName() == convidado) {
                            for(let g of chats) {
                                 if (g.getNome() == grupo) {
                                     if(g.esta(u.getName())){
                                        g.addPessoa(c);
                                        break;
                                     } else {
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
            let chat = readline.question("Informe o nome do chat: ");
            for (let c of chats){
                if (c.getNome() == chat){
                    console.log(c.show());
                }
            }
            break;
        }
        case "zap": {
            let enviou : String = readline.question("Quem enviou a mensagem: ");
            let destino: String = readline.question("Qual o grupo:  ");
            let mensagem: String = readline.question("Qual a mensagem: ");

            for (let c of chats) {
                if (c.getNome() == destino){
                    c.zap(enviou, mensagem);
                }
            }
            break;
        }
        case "notificacoes": {
            let usuario : String = readline.question("De quem deseja ver as notificacoes: ");
            for (let u of usuarios) {
                if (u.getName() == usuario) {
                    console.log(u.notify());
                    break;
                }
            }
            break;
        }
        case "ler": {
            let nome : String = readline.question("Nome do usuario: ");
            let grupo : String = readline.question("Nome do grupo: ");

            for (let c of chats) {
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