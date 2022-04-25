function controleDeAcesso(altura, vemAcompanhada){
    if(altura < 1.20){
        console.log("Não pode andar, nem acompanhada!")
    }
    if(altura > 1.20 && altura < 1.40 && vemAcompanhada == true){
        console.log("Está acompanhada, pode andar!!")
    }
    if(altura > 1.20 && altura < 1.40 && vemAcompanhada == false){
        console.log("Não pode andar sem acompanhante!!")
    } else if (altura > 1.40 && altura < 2.00){
        console.log("Pode andar tranquilo!!!")
    }
}


module.exports = controleDeAcesso;