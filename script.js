let dados = document.querySelector("#dados");
let salvar = document.querySelector("#salvar");
let horaDigital = document.querySelector(".hora");
let data = document.querySelector(".data")
let todosDados = document.querySelector("#todosDados");
let botaoSegunda = document.querySelector(".segunda");
let dia = document.querySelector('#dia_selecionado');
let hora = document.querySelector('.hora1');
let minuto = document.querySelector('.minuto');
let seF = document.getElementById('segunda');
let teF = document.getElementById('terca');
let qaF = document.getElementById('quarta');
let qiF = document.getElementById('quinta');
let sxF = document.getElementById('sexta');
let sab = document.getElementById('sabado');
let dom = document.getElementById('domingo');

let horaAtual = document.getElementById('horaAtual');
let minutoAtual = document.getElementById('minutoAtual');

let segunda = [];
let terca = []; 
let quarta = [];  
let quinta = [];
let sexta = [];
let sabado = [];
let domingo = [];
let nomeMes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto","setembro","outubro","novembro","dezembro")


function horaAtualizando(){
    
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()

    horaDigital.innerHTML = `${fixandoZero(hour)}:${fixandoZero(minute)}`  
}

function fixandoZero(time){
    return time < 10 ? `0${time}`: time
}
setInterval(horaAtualizando, 1000)
horaAtualizando()

function dataAtualizando(){    
    let now = new Date()
    data.innerHTML = `${now.getDate()} de ${nomeMes[now.getMonth()]} de ${now.getFullYear()}`
}
dataAtualizando()

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

function validar(){
    if(document.getElementById("atividade").value == ''){
        let erro = document.querySelector(".atividade")
        erro.classList.add('erro');        
    } else {
        let erro = document.querySelector(".atividade")
        erro.classList.remove('erro')
    }
    if(document.getElementById("horaAtual").value == '' || document.getElementById("minutoAtual").value == ''){
        let erroAtual = document.querySelector(".inputHora")
        erroAtual.classList.add('erro')
    } else {
        let erroAtual = document.querySelector(".inputHora")
        erroAtual.classList.remove('erro')
    } 
}

salvar.addEventListener("click", (e) => {
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
    } else if(selecionado == 'terca-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        terca.push(pSemanal);
        localStorage.setItem("terca", JSON.stringify(terca));
        removeAtividade();
        adicionaTerca();
        atividade.value = "";
    } else if(selecionado == 'quarta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quarta.push(pSemanal);
        localStorage.setItem("quarta", JSON.stringify(quarta));
        removeAtividade()
        adicionaQuarta() 
        atividade.value = "";
    } else if(selecionado == 'quinta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        quinta.push(pSemanal);
        localStorage.setItem("quinta", JSON.stringify(quinta));
        removeAtividade();
        adicionaQuinta();
        atividade.value = "";
    } else if(selecionado == 'sexta-feira'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sexta.push(pSemanal);
        localStorage.setItem("sexta", JSON.stringify(sexta));
        removeAtividade();
        adicionaSexta();
        atividade.value = "";
    } else if(selecionado == 'sabado'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        sabado.push(pSemanal);
        localStorage.setItem("sabado", JSON.stringify(sabado));
        removeAtividade();
        adicionaSabado();
        atividade.value = "";
    } else if(selecionado == 'domingo'){
        pSemanal.hora = hora;
        pSemanal.minuto = minuto;
        pSemanal.atividade = atividade.value;
        domingo.push(pSemanal);
        localStorage.setItem("domingo", JSON.stringify(domingo));
        removeAtividade();
        adicionaDomingo();
        atividade.value = "";
    }
});
    
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
            //id = hora+minuto        
            localStorage.setItem("segunda", JSON.stringify(segunda)); 
            removeAtividade()
            adicionaSegunda();
            atividade.value = "";          
        } else if(selecionado == 'terca-feira'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            terca.push(pSemanal);
            localStorage.setItem("terca", JSON.stringify(terca));
            removeAtividade();
            adicionaTerca();
            atividade.value = "";
        } else if(selecionado == 'quarta-feira'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            quarta.push(pSemanal);
            localStorage.setItem("quarta", JSON.stringify(quarta));
            removeAtividade()
            adicionaQuarta() 
            atividade.value = "";
        } else if(selecionado == 'quinta-feira'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            quinta.push(pSemanal);
            localStorage.setItem("quinta", JSON.stringify(quinta));
            removeAtividade();
            adicionaQuinta();
            atividade.value = "";
        } else if(selecionado == 'sexta-feira'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            sexta.push(pSemanal);
            localStorage.setItem("sexta", JSON.stringify(sexta));
            removeAtividade();
            adicionaSexta();
            atividade.value = "";
        } else if(selecionado == 'sabado'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            sabado.push(pSemanal);
            localStorage.setItem("sabado", JSON.stringify(sabado));
            removeAtividade();
            adicionaSabado();
            atividade.value = "";
        } else if(selecionado == 'domingo'){
            pSemanal.hora = hora;
            pSemanal.minuto = minuto;
            pSemanal.atividade = atividade.value;
            domingo.push(pSemanal);
            localStorage.setItem("domingo", JSON.stringify(domingo));
            removeAtividade();
            adicionaDomingo();
            atividade.value = "";
        }
});

seF.addEventListener('click', function(){      
    let atividadeSegunda = localStorage.getItem("segunda") 
    //console.log(atividadeSegunda)
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

function removeLocalStorage(){
    localStorage.clear()
    removeAtividade()
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

function adicionaSegunda(){
    removeAtividade() 
    let atividadeSegunda = localStorage.getItem("segunda");    
    let receberSegunda = JSON.parse(atividadeSegunda); 
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 

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
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaSegunda text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);         
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaSegunda py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        segunda.indexOf(indice);
        segunda.splice(indice, 1); 
        localStorage.setItem("segunda", JSON.stringify(segunda))
        removeAtividade()
    }
}

function adicionaTerca(){
    removeAtividade()  
    let atividadeTerca = localStorage.getItem("terca");    
    let receberTerca = JSON.parse(atividadeTerca); 
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 
   
    if(receberTerca){
        let recebendoAtividade = receberTerca.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberTerca.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberTerca.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaTerca text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaTerca py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        terca.indexOf(indice);
        terca.splice(indice, 1); 
        localStorage.setItem("terca", JSON.stringify(terca))
        removeAtividade()
    }
}

function adicionaQuarta(){ 
    removeAtividade() 
    let atividadeQuarta = localStorage.getItem("quarta")     
    let receberQuarta = JSON.parse(atividadeQuarta) 
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 
 
    if(receberQuarta){
        let recebendoAtividade = receberQuarta.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberQuarta.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberQuarta.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaQuarta text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaQuarta py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        quarta.indexOf(indice);
        quarta.splice(indice, 1); 
        localStorage.setItem("quarta", JSON.stringify(quarta))
        removeAtividade()
    }
}

function adicionaQuinta(){
    removeAtividade()  
    let atividadeQuinta = localStorage.getItem("quinta")     
    let receberQuinta = JSON.parse(atividadeQuinta)  
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 
   
    if(receberQuinta){
        let recebendoAtividade = receberQuinta.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberQuinta.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberQuinta.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaQuinta text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaQuinta py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        quinta.indexOf(indice);
        quinta.splice(indice, 1); 
        localStorage.setItem("quinta", JSON.stringify(quinta))
        removeAtividade()
    }
}

function adicionaSexta(){
    removeAtividade()  
    let atividadeSexta = localStorage.getItem("sexta")     
    let receberSexta = JSON.parse(atividadeSexta)  
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar") 

    if(receberSexta){
        let recebendoAtividade = receberSexta.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberSexta.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberSexta.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaSexta text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaSexta py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        sexta.indexOf(indice);
        sexta.splice(indice, 1); 
        localStorage.setItem("sexta", JSON.stringify(sexta))
        removeAtividade()
    }
}

function adicionaSabado(){
    removeAtividade()  
    let atividadeSabado = localStorage.getItem("sabado");    
    let receberSabado = JSON.parse(atividadeSabado);  
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar")      
   
    if(receberSabado){
        let recebendoAtividade = receberSabado.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberSabado.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberSabado.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaSabado text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaSabado py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        sabado.indexOf(indice);
        sabado.splice(indice, 1); 
        localStorage.setItem("sabado", JSON.stringify(sabado))
        removeAtividade()
    }
}   

function adicionaDomingo(){
    removeAtividade() 
    let atividadeDomingo = localStorage.getItem("domingo")     
    let receberDomingo = JSON.parse(atividadeDomingo)  
    let dadosHora = document.querySelector(".dados");
    let dadosMinuto = document.querySelector(".dadosMinuto")
    let dadosAtividade = document.querySelector(".dadosAtividade")
    let botaoApagar = document.querySelector(".botaoApagar")      
   
    if(receberDomingo){
        let recebendoAtividade = receberDomingo.map(function(atividade) {
            return atividade.atividade;
        });

        let recebendoHora = receberDomingo.map(function(hora){
            return hora.hora;
        });

        let recebendoMinuto = receberDomingo.map(function(minuto){
            return minuto.minuto
        });

        recebendoHora.forEach(function(hora,indice){
            let elementoDiv = document.createElement("div");            
            let textoHora = document.createTextNode(hora);            
            elementoDiv.appendChild(textoHora)
            elementoDiv.setAttribute("class", "planejamento-hora flex-column horaDomingo text-right py-4 my-2 pl-2 pr-0 ml-4 mr-0"); 
            dadosHora.appendChild(elementoDiv);            
        })

        recebendoMinuto.forEach(function(minuto, indice){
            let elementoDiv = document.createElement("div");
            let textoMinuto = document.createTextNode(minuto);
            elementoDiv.appendChild(textoMinuto)
            elementoDiv.setAttribute("class", "planejamento-minuto horaDomingo py-4 pr-1 ml-0 my-2 mr-1 text-left");
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
            elementoBotao.addEventListener('click', function() {
                removerItem(indice)
            })
        })                                
    }

    function removerItem(indice){
        domingo.indexOf(indice);
        domingo.splice(indice, 1); 
        localStorage.setItem("domingo", JSON.stringify(domingo))
        removeAtividade()
    }
}

  