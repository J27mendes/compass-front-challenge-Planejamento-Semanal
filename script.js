let dados = document.querySelector("#dados");
//let planejamento = document.querySelector(".planejamento");
let apagar = document.querySelector("#apagar")
let adicionar = document.getElementById("adicionar")
let todosDados = document.querySelector("#todosDados")
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
        hora = `0${hora}h`             
    } else {
        hora =`${hora}h`
    }   
})

minutoAtual.addEventListener('change', function(){
    minuto = parseInt(minutoAtual.value)
    if(minuto < 10) {
        minuto = `0${minuto}m`
    } else {
        minuto = `${minuto}m`
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
        adicionaSegunda();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'terca-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        terca.push(pSemanal);
        localStorage.setItem("terca", JSON.stringify(terca));
        removeAtividade();
        adicionaTerca();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'quarta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quarta.push(pSemanal);
        localStorage.setItem("quarta", JSON.stringify(quarta));
        removeAtividade()
        adicionaQuarta() 
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'quinta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quinta.push(pSemanal);
        localStorage.setItem("quinta", JSON.stringify(quinta));
        removeAtividade();
        adicionaQuinta();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'sexta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sexta.push(pSemanal);
        localStorage.setItem("sexta", JSON.stringify(sexta));
        removeAtividade();
        adicionaSexta();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'sabado'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sabado.push(pSemanal);
        localStorage.setItem("sabado", JSON.stringify(sabado));
        removeAtividade();
        adicionaSabado();
        atividade.value = "";
        hora = "";
        minuto = "";
    } else if(selecionado == 'domingo'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        domingo.push(pSemanal);
        localStorage.setItem("domingo", JSON.stringify(domingo));
        removeAtividade();
        adicionaDomingo();
        atividade.value = "";
        hora = "";
        minuto = "";
    }
}); 

seF.addEventListener('click', function(){      
    let atividadeSegunda = localStorage.getItem("segunda") 
    if(atividadeSegunda){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaSegunda()               
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    }   
})

teF.addEventListener('click', function(){    
    let atividadeTerca = localStorage.getItem("terca")    
    if(atividadeTerca){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaTerca()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    }   
})

qaF.addEventListener('click', function(){    
    let atividadeQuarta = localStorage.getItem("quarta")    
    if(atividadeQuarta){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaQuarta()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    }  
})
  
qiF.addEventListener('click', function(){    
    let atividadeQuinta = localStorage.getItem("quinta")    
    if(atividadeQuinta){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaQuinta()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    }  
})

sxF.addEventListener('click', function(){    
    let atividadeSexta = localStorage.getItem("sexta")    
    if(atividadeSexta){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaSexta()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    } 
})
sab.addEventListener('click', function(){    
    let atividadeSabado = localStorage.getItem("sabado")    
    if(atividadeSabado){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaSabado()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    } 
})
dom.addEventListener('click', function(){    
    let atividadeDomingo = localStorage.getItem("domingo")    
    if(atividadeDomingo){    
        if(todosDados.style.display == "none"){ 
            todosDados.style.display = "block";
            adicionaDomingo()          
        } else {
            todosDados.style.display = "none";
            removeAtividade()
        }
    } 
})

function adicionaSegunda(){ 
    let atividadeSegunda = localStorage.getItem("segunda");    
    let receberSegunda = JSON.parse(atividadeSegunda); 
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 
    //let horaPlanejada = document.querySelector(".Planejamento_hora")
    //let p = document.getElementsByClassName(".planejamento")
     
   
    if(receberSegunda){
        let recebendoAtividade = receberSegunda.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberSegunda.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberSegunda.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horario text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto minutoAgora py-4 pr-1 ml-0 my-2 mr-1 text-left");
            dadosMinuto.appendChild(elementoDiv);
        })

        
        recebendoAtividade.forEach(function(nome, indice){ 
            let elementoDiv = document.createElement("p");
            let textoAtividade = document.createTextNode(nome); 
            let elementoBotao = document.createElement("button");
            let textoBotao = document.createTextNode("Apagar")         
            elementoDiv.appendChild(textoAtividade)            
            dadosAtividade.appendChild(elementoDiv)            
            elementoDiv.setAttribute("class", "planejamento flex-column bg-light text-start pt-2 h-75 row-2 w-50 flex-wrap px-2 ml-4 mt-2 mb-2 mr-1") 
           
            elementoBotao.appendChild(textoBotao) 
            botaoApagar.appendChild(elementoBotao)
            elementoDiv.appendChild(elementoBotao)   
            elementoBotao.setAttribute("class", "apagar ml-0 ml-4 mt-2 mb-2 px-1 py-1 btn btn-danger")         
        })
    
    }
}

function removeAtividade(){
    let dadosHora = document.getElementById("dadosRecebidos")
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar")
    
    let div = document.querySelector(".planejamento")
    if(div){
        dadosHora.innerText = ""; 
        dadosAtividade.innerText = "";
        dadosMinuto.innerText = "";
        botaoApagar.innerText = "";
    }
}

function adicionaTerca(){ 
    let atividadeTerca = localStorage.getItem("terca")     
    let receberTerca = JSON.parse(atividadeTerca) 
    
    todosDados = document.querySelector(".dados")
   
    if(receberTerca){
        let recebendoAtividade = receberTerca.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            todosDados.setAttribute("class", "planejamento")              
        })
    
    }
}
function adicionaQuarta(){ 
    let atividadeQuarta = localStorage.getItem("quarta")     
    let receberQuarta = JSON.parse(atividadeQuarta) 
    
    todosDados = document.querySelector(".dados")
   
    if(receberQuarta){
        let recebendoAtividade = receberQuarta.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")              
        })
    
    }
}

function adicionaQuinta(){ 
    let atividadeQuinta = localStorage.getItem("quinta")     
    let receberQuinta = JSON.parse(atividadeQuinta) 
    
    todosDados = document.querySelector(".dados")
   
    if(receberQuinta){
        let recebendoAtividade = receberQuinta.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")              
        })
    
    }
}

function adicionaSexta(){ 
    let atividadeSexta = localStorage.getItem("sexta")     
    let receberSexta = JSON.parse(atividadeSexta) 
    
    todosDados = document.querySelector(".dados")
   
    if(receberSexta){
        let recebendoAtividade = receberSexta.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")              
        })
    
    }
}

function adicionaSabado(){ 
    let atividadeSabado = localStorage.getItem("sabado");    
    let receberSabado = JSON.parse(atividadeSabado); 
    let todosDados = document.querySelector(".dados")      
   
    if(receberSabado){
        let recebendoAtividade = receberSabado.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")              
        })
    
    }
}

function adicionaDomingo(){ 
    let atividadeDomingo = localStorage.getItem("domingo")     
    let receberDomingo = JSON.parse(atividadeDomingo) 
    
    todosDados = document.querySelector(".dados")
   
    if(receberDomingo){
        let recebendoAtividade = receberDomingo.map(function(atividade) {
            return atividade.atividade;
        });

        
        recebendoAtividade.forEach(function(nome, indice){
          
            let elementoDiv = document.createElement("div");
            let textoAtividade = document.createTextNode(nome)
            
            elementoDiv.appendChild(textoAtividade)
            todosDados.appendChild(elementoDiv)
            elementoDiv.setAttribute("class", "flex-column text-left col-3 mx-3")  
            elementoDiv.setAttribute("class", "planejamento")              
        })
    
    }
}



/*function retorno (atividadeSegunda, atividadeTerca){
    segunda = JSON.parse(atividadeSegunda)
    terca = JSON.parse(atividadeTerca)
    return segunda, terca
}

console.log(retorno())*/ 

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


