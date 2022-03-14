var elementos = document.querySelectorAll(".jogador img");
var jogadorTipo = "";
var inimigoTipo = "";


function quemGanhou(){
    let vencedor = document.querySelector('.vencedor');

    if(jogadorTipo == "pedra"){
        if(inimigoTipo == "pedra"){
            vencedor.innerHTML = "Empate"
        } else if (inimigoTipo == "papel"){
            vencedor.innerHTML = "Voce Perdeu"
        } else{
            vencedor.innerHTML = "Voce Ganhou"
        }
    }

    else if(jogadorTipo == "papel"){
        if(inimigoTipo == "pedra"){
            vencedor.innerHTML = "Voce Ganhou"
        } else if (inimigoTipo == "papel"){
            vencedor.innerHTML = "Empate"
        } else{
            vencedor.innerHTML = "Voce Perdeu"
        }
    }

    else if(jogadorTipo == "tesoura"){
        if(inimigoTipo == "pedra"){
            vencedor.innerHTML = "Voce Perdeu"
        } else if (inimigoTipo == "papel"){
            vencedor.innerHTML = "Voce Ganhou"
        } else{
            vencedor.innerHTML = "Empate"
        }
    }
}

 function resetaOpacidade(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

function resetInimigo() {
    const opcoes_inimigo = document.querySelectorAll('.inimigo div');
    for(var i = 0; i < opcoes_inimigo.length; i++){
        opcoes_inimigo[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    //vai retornar um rand variando entre 2 numeros inicias (0 e 1)
    let rand = Math.floor(Math.random()*3);
    const opcoes_inimigo = document.querySelectorAll('.inimigo div');
    resetInimigo()
    for(var i = 0; i < opcoes_inimigo.length; i++){
        if (i == rand) {
            opcoes_inimigo[i].childNodes[0].style.opacity = 1
            inimigoTipo = opcoes_inimigo[i].childNodes[0].getAttribute('tipo');
        }
    }


    quemGanhou();
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',(t)=>{
        resetaOpacidade();
        t.target.style.opacity = 1;
        jogadorTipo = t.target.getAttribute('tipo');
        //alert(jogadorTipo);
        

        inimigoJogar();
    })
}