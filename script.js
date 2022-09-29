const dados = document.querySelector("#dados");
const planejamento = document.querySelector(".planejamento");
const apagar = document.querySelector("#apagar")
const todosDados = document.querySelector("#todosDados")
const botaoSegunda = document.querySelector(".segunda")
//const diaSelecionado = document.querySelector("#dia_selecionado")
let dia = document.querySelector('#dia_selecionado')
let hora = document.querySelector('.hora1')
let minuto = document.querySelector('.minuto')


dia.addEventListener('change', function(){
    if (dia.value === 'segunda-feira') {
        console.log(dia.value)
        localStorage.setItem("segunda", dia.value)        
    } else if(dia.value === 'terca-feira'){

    }
})

hora.addEventListener('change', function(){
    hora = parseInt(hora.value)
    if(hora < 10) {
        `0${hora}:`
    } else {
        `${hora}`
    }    
    localStorage.setItem("horaRecebida", hora)
    hora = '';
})

minuto.addEventListener('change', function(){
    minuto = parseInt(minuto.value)
    if(minuto < 10) {
        `0${minuto}:`
    } else {
        `${minuto}`
    }    
    localStorage.setItem("minutoRecebido", minuto)
    minuto = '';
})


function checarAtividade(){
    const localAtividade = localStorage.getItem("atividadeSegunda")

    if(localAtividade){
       todosDados.style.display = "block"

        const atividadeElementos = document.querySelector(".planejamento")     
        atividadeElementos.textContent = localAtividade
        
    } else {
        todosDados.style.display = "none"
    }
}

dados.addEventListener("submit", (e) => {
    e.preventDefault();


    const atividade = document.querySelector("#atividade");
    localStorage.setItem("atividadeSegunda", atividade.value)
    atividade.value = "";
    
    checarAtividade()
}); 

checarAtividade()

function qualDia(dia) {
    switch(dia) {
        case 'segunda': todosDados.style.display = "block";
        break
        case 'terca': console.log('hoje é terça')
        break
        case 'quarta': console.log('hojé é quarta')
        break
        case 'quinta': console.log('hojé é quinta')
        break
        case 'sexta': console.log('hojé é sexta')
        break
        case 'sabado': console.log('hoje é sábado')
        break
        case 'domingo': console.log('hoje é domingo')
        break
        default : console.log('selecione algum dia')
    }
}



