// código javascript
function adicionarTarefa() {
    // pega o id do input
    let inputTarefa = document.getElementById('inputTarefa')
    // pega o valor do input
    let tarefa = inputTarefa.value.trim();
    //pega o valor do p
    const mensagem = document.getElementById('mensagem')

    // se o valor for vazio retorna erro

    if (tarefa == ""){
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743"
  
    }else{
        // mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        // pega a mensagem e manda pro parágrafo    
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28A745"
        
        // pega o id do ul
        const listaTarefas = document.getElementById('listaTarefas')
        // cria uma item da lista
        let novaTarefa = document.createElement('li')
        // adiciona o valor do input na lista
        novaTarefa.textContent = tarefa
         // coloco a minha lista dentro do ul
        listaTarefas.appendChild(novaTarefa)     
  }       
        // limpa o input
        inputTarefa.value = ""
  
}
  
  

  