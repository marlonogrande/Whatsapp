import { Usuario } from "./Usuario";

export class Chat {
    private usuarios;
    private mensagens;
    private nome : String;

    public constructor (nome : String) {
        this.usuarios = new Array<Usuario>();
        this.mensagens = new Array<Array<String>>();
        this.nome = nome;
    }

    public addPessoa (usuario : Usuario) {
        this.usuarios.push(usuario);
        this.mensagens.push(new Array<String>());
        usuario.addGrupo(this);
    }

    public zap (enviou : String, msg : String) : void {
        for (let i  = 0; i < this.usuarios.length; i++){
            if (this.usuarios[i].getName() != enviou){
                this.mensagens[i].push("[" + enviou + ": " + msg + "]");
            }
        }
        console.log("")
    }

    public notify(nome : String) : String {
        for (let i = 0; i < this.usuarios.length; i++){
                if (this.usuarios[i].getName() == nome) {
                    return this.nome + "(" + this.mensagens[i].length + ")";
                }
        }
        return this.nome
    }

    public ler (nome : String) : void {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getName() == nome) {
                for(let s of this.mensagens[i]) {
                    console.log(s);
                }
                return;
            }
        }
        console.log("Falha: " + nome + " nao está no grupo");
        return;
    }

    public esta (nome : String) : boolean {
        for (let u of this.usuarios) {
            if (u.getName() == nome) {
                return true;
            }
        }
        return false;
    }

    public getNome(): String {
        return this.nome;
    }

    public show() : String {
        let res : String = "["
        for (let u of this.usuarios) {
            res += u.getName() + " ";
        }
        res += "]";
        return res;
    }
}