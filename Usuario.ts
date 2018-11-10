import { Chat } from "./Chat";

export class Usuario{
    private username : String;
    private grupos ;

    public constructor (username : String) {
        this.username = username;
        this.grupos = new Array<Chat>();
    }

    public getName () : String {
        return this.username;
    }

    public addGrupo(chat : Chat) : void {
        this.grupos.push(chat);
    }

    public getChats() : String {
        let res : String = "[";
        for (let g of this.grupos){
            res += g.getNome() + " ";
        }
        res += "]";
        return res;
    }

    public notify() : String {
        let res : String = "[ ";
        for (let g of this.grupos){
            res += g.notify(this.username) + " "
        }
        res += "]";
        return res;
    }

    public getGrupos() : Array<Chat> {
        return this.grupos;
    }
}

