let quatidadeVitorias = 105
let quantidadeDerrotas = 1



function sub(){
    return quatidadeVitorias - quantidadeDerrotas
}

total = sub()

let nv;
let i = 0;

while (i < 1){
    if(total < 10){
        nv = "Ferro"

    }else if (total >= 11 && total <= 20){
        nv = "Bronze"

    }else if (total >= 21 && total <= 50){
        nv = "Prata"

    }else if (total >= 51 && total <= 80){
        nv = "Ouro"

    }else if (total >= 81 && total <= 90){
        nv= "Diamante"

    }else if(total >= 91 && total <= 100){
        nv = "Lendário"

    }else if(total >= 101){
        nv = "Imortal"
    }
    i++;
    console.log(`O Héroi tem o Saldo de Vitórias de ${quatidadeVitorias} e está no nível ${nv}`)

}




