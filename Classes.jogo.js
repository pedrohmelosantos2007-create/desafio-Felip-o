
class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        
        if(tipo === " " || tipo === null || tipo === undefined){
            this.tipo ="cavaleiro"
        } else {
            this.tipo = tipo 
        }

        let tipos =["mago ","guerreiro","monge","ninja"];
        let descricoes = ["usou magia","usou espada","usou artes marciais","usou shuriken"];

        this.ataques = {}

        for(let i = 0; i < tipos.length; i++){
            this.ataques[tipos[i]] = descricoes[i];       
        }
    }
//__________________________________________________
        atacar(){
       let ataque = this.ataques[this.tipo] || "ataque básico"
        console.log(`O ${this.tipo} atacou usando ${ataque}!!`)   
    }     
    
 }

//___________________________________________________
let userHeroi = new heroi("Pedro",19,"ninja")
console.log(`O usuario ${userHeroi.nome} com idade de ${userHeroi.idade} anos, está com o personagem ${userHeroi.tipo}!` )

userHeroi.atacar()