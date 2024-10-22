//1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementBlyId("botao_add.id");
const formulario = document.getElementBlyId("form_id");
const lista_idistaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id");
const botaoLimpa = document.getElementBlyId("botao_limopa_id");

//2. Processamentos através de eventos e funções

//função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener("click", (event)=> {
    event.preventDefault();

    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

    textoTarefa.innerText = novaTarefa.value;
    iconeDeDeleta.innerText = "";

    if (textoTarefa.innerText.trim() === "") {
        alert("Você precisa digitar alguma coisa!");

    } else {
      lista_idistaDeTarefas.appendChild(elementoLista);
      elementoLista.appendChild(textoTarefa);
      elementoLista.appendChild(iconeDeleta);
      formulario.reset();
    }
    novaTarefa.focus();

    // função para marcar individualmente uma tarefa
    textoTarefa.addEventListener("click", () => {

        textoTarefa.classList.toggle("checked");
        verificarMarcados(); // chama a função do DESAFIO 2 para mudart o texto do botão
    })

    //função para deletar individualmente uma tarefa
    iconeDeleta.addEventListener("click", () => {
    
        elementoLista.remove();
    });
    verificarMarcados(); // chama a função do DESAFIO 2 para mudar o texto do botão
    });

    // função para marcar todas as tarefas

    botaoMarca.addEventListener("click", () => {
      let todasAsTarefas = document.querySelectorAll("p");
    
      if (botaoMarca.innerText === "Marcar todos") {
        todasAsTarefas.forEach((tarefa) => {
         tarefa.classList.add("checked");
        });
        botaoMarca.innerText = "Desmarcar todos";
      } else {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.remove("checked");
        });
        botaoMarca.innerText = "Marcar todos";
    }
    });

    // função para limpar todas as tarefas:

    botaoLimpa.addEventListener("click", () => {
     lista_idistaDeTarefas.innerHTML = "";
    });

    // ### DESAFIO 2 ###
    // função que verifica se todos estão marcados

    function verificarMarcados() {
     let todasAsTarefas = document.querySelectorAll("p");
     let verficacao = []; //array vazia que recebe as tarefas que estão 

     todasAsTarefas.forEach((tarefa) => {
     //forEach pra verificar cada tarefa da array todasAsTarefas
     if (!tarefa.classList.contains("checked")) {
        //condição que verifica se a tarefa NÃO possui a classe checked
        verificarMarcados.push(tarefa); //insere as atrefas demarcadas na array
     }
     });

 //verificação se alguma tarefa estava demarcada e foi adicionada no
 if (verificarMarcados.length === 0 && todasAsTarefas) {
      //se array tiver vazia e existir uma lista de tarefas ele muda o
      botaoMarca.innerText = "Desmarcar todos";
    } else {
      //se a array verificacao tiver algum item ele vai mudar o texto do
    }
    }
