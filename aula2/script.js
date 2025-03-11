// código javascript

let tarefas = []
function adicionarTarefa() {
    
    const inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById('mensagem')
   


    if (tarefa == ""){
      
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        my5t5ensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743"
  
    }else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28A745"
        tarefas.push(tarefa)
        renderizarTarefas()
  }       
        inputTarefa.value = ""
}
// adicionando função de renderizar
function renderizarTarefas(){
    const listaTarefas = document.getElementById('listaTarefas')
   
    listaTarefas.innerHTML = ""
 
    for(let i = 0; i < tarefas.length; i++ ){
        let novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefas[i]
        // criando botao remover
        let botaoRemover = document.createElement('button')
        botaoRemover.className = 'remover'
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)
       

        let botaoEditar = document.createElement('button')
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)
        limparLista()


        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)  
    }



        // criandoa lógica de apgar
       function removerTarefa(i){
            tarefas.splice(i, 1)
            renderizarTarefas()
       }

       // criando a lógica de editar

       function editarTarefa(i){
        let tarefaEditada = prompt("Edite a sua tarefa: ")
        if (tarefaEditada.trim() !== ""){
            tarefas[i] = tarefaEditada
            renderizarTarefas()
        }
    }

     
}
  
/* 
    criando uma função de click que limpa
*/
function limparLista(){
    
    tarefas.length = 0
    const mensagem = document.getElementById('mensagem')
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
    renderizarTarefas()
   }