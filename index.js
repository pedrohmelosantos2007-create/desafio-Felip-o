let herois =[
    {nome: "Pedro", xp: 500},
    {nome: "Paulo", xp: 1100},
    {nome: "Lary", xp: 3000},
    {nome: "Erick", xp: 5100},
    {nome: "Marcus", xp: 7500},
    {nome: "Maria", xp: 8300},
    {nome: "Gabi", xp: 9005},
    {nome: "Celso", xp: 10200},
];

herois.forEach(heroi => {
    let nome = heroi.nome;
    let xp = heroi.xp;


    if(xp < 1000){
        nv = "ferro"
    }else if (xp >= 1001 && xp <=2000){
        nv ="bronze"
    }else if (xp >= 2001 && xp <=5000){
        nv ="prata"
    }else if (xp >= 5001 && xp <=7000){
        nv ="ouro"
    }else if (xp >= 7001 && xp <=8000){
        nv ="platina"
    }else if (xp >= 8001 && xp <=9000){
        nv ="ascendente"
    }else if (xp >= 9001 && xp <=10000){
        nv ="imortal"
    }else if (xp >=10001){
        nv ="radiante"
    }
    console.log ("O Herói de nome " + nome + " como xp de " + xp +  " está no nível de " + nv)

});