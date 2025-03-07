// código javascript
function adicionarTarefa() {
    // pega o id do input
    let inputTarefa = document.getElementById('inputTarefa')
    // pega o valor do input
    let tarefa = inputTarefa.value;
    
    // se digitar algo faça
    if (tarefa != num || tarefa != ""){
        // mensagem de sucesso
        let mensagem = "Tarefa adicionada com sucesso!";
        // pega a mensagem e manda pro parágrafo    
        document.getElementById('mensagem').textContent = mensagem
        // pega o id do ul
        let listaTarefas = document.getElementById('listaTarefas')
        // cria uma item da lista
        let novaTarefa = document.createElement('li')
        // adiciona o valor do input na lista
        novaTarefa.textContent = tarefa
        
        // coloco a minha lista dentro do ul
        listaTarefas.appendChild(novaTarefa)
        // limpa o input
        inputTarefa.value = ""
    }
    // se for digitado nada
    else{
        // mensagem de erro
       let mensagem = "Erro, você não digitou nada!"
       // manda mensagem pro parágrafo
       document.getElementById('mensagem').textContent = mensagem
    }
}
  