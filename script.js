let dados = document.querySelector("#dados");
let planejamento = document.querySelector(".planejamento");
let apagar = document.querySelector("#apagar")
let adicionar = document.getElementById("adicionar")
//const todosDados = document.querySelector("#todosDados")
let botaoSegunda = document.querySelector(".segunda")
//const diaSelecionado = document.querySelector("#dia_selecionado")
let dia = document.querySelector('#dia_selecionado')
let hora = document.querySelector('.hora1')
let minuto = document.querySelector('.minuto')
let seF = document.getElementById('segunda');
let teF = document.getElementById('terca');
let qaF = document.getElementById('quarta');
let qiF = document.getElementById('quinta');
let sxF = document.getElementById('sexta');
let sab = document.getElementById('sabado');
let dom = document.getElementById('domingo');


let horaAtual = document.getElementById('horaAtual')
let minutoAtual = document.getElementById('minutoAtual')

let segunda = [];
let terca = []; 
let quarta = [];  
let quinta = [];
let sexta = [];
let sabado = [];
let domingo = [];

horaAtual.addEventListener('change', function(){
    hora = parseInt(horaAtual.value)
    if(hora < 10) {
        hora = `0${hora}:h`             
    } else {
        hora =`${hora}:h`
    }   
})

minutoAtual.addEventListener('change', function(){
    minuto = parseInt(minutoAtual.value)
    if(minuto < 10) {
        minuto = `0${minuto}:m`
    } else {
        minuto = `${minuto}:m`
    }   
})

dados.addEventListener("submit", (e) => {
    e.preventDefault();

    let atividade = document.querySelector("#atividade");
    let pSemanal = {
        hora: '',
        minuto: '',
        atividade: ''
    }
    
    let selecionado = dia.value
    if(selecionado == 'segunda-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        segunda.push(pSemanal);
        localStorage.setItem("segunda", JSON.stringify(segunda)); 
        removeAtividade()
        adicionaAtividade();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'terca-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        terca.push(pSemanal);
        localStorage.setItem("terca", JSON.stringify(terca));
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'quarta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quarta.push(pSemanal);
        localStorage.setItem("quarta", JSON.stringify(quarta));
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'quinta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quinta.push(pSemanal);
        localStorage.setItem("quinta", JSON.stringify(quinta));
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'sexta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sexta.push(pSemanal);
        localStorage.setItem("sexta", JSON.stringify(sexta));
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'sabado'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sabado.push(pSemanal);
        localStorage.setItem("sabado", JSON.stringify(sabado));
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'domingo'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        domingo.push(pSemanal);
        localStorage.setItem("domingo", JSON.stringify(domingo));
        atividade.value = "";
        hora = "";
        minuto = "";
    }
}); 

seF.addEventListener('click', function(){      
    let localAtividade = localStorage.getItem("segunda") 
    if(localAtividade){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaAtividade()               
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    }   
})

teF.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("terca")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})

qaF.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("quarta")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})
  
qiF.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("quinta")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})
sxF.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("sexta")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})
sab.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("sabado")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})
dom.addEventListener('click', function(){    
    const localAtividade = localStorage.getItem("domingo")
    const atividadeElementos = document.querySelector(".planejamento")     
    atividadeElementos.textContent = localAtividade
    if(localAtividade){    
        atividadeElementos.textContent = localAtividade
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";       
        } else {
            todosDados.style.display = "none";
        }
    }
})



function adicionaAtividade(){ 
    let localAtividade = localStorage.getItem("segunda")
    let receberAtividade = JSON.parse(localAtividade)
    
    let todosDados = document.getElementById("dadosRecebidos")
   
    if(receberAtividade){
        let recebendoAtividade = receberAtividade.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")
            console.log(elementoDiv)              
            
        })
    
    }
}

function removeAtividade(){
    let todosDados = document.getElementById("dadosRecebidos")
    let div = document.querySelector(".planejamento")
    console.log(div)

    if(div){
        todosDados.innerText = ""; 
    }
}

// Remove todos os descendentes da <div id="alvo"> 

//const receberAtividade = JSON.parse(localAtividade)
//adicionaAtividade() 

/*function removeAtividade(chave, valor){
    meuJSON = receberAtividade.filter(function(jsonObject) {
        return jsonObject[chave] == valor;
    });
    return meuJSON
}*/
/*for(var i = div.length - 1; i >= 0; i--){
        div[i].remove()
    }*
        /*let recebendoAtividade = receberAtividade.map(function(atividade) {
            return atividade.atividade;
        });
        /*for(let i = 0; i <= recebendoAtividade; i++){
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(recebendoAtividade[i])
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "planejamento flex-column text-left col-3 mx-3") 
            //console.log(recebendoAtividade)
        }

        recebendoAtividade.forEach(function(nome, indice){
                           
            let elementoDiv = document.createElement("div");


            //let textoAtividade = document.createTextNode(nome)
            
            //elementoDiv.appendChild(textoAtividade)
            //todosDados.appendChild(elementoDiv)
            //elementoDiv.setAttribute("class", "planejamento flex-column text-left col-3 mx-3")  
                                
            
        })
    }

}*/


