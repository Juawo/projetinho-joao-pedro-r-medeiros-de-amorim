let listaTarefas = []
let listaTarefasConc = []

export function criarTarefa() {
  let titulo = prompt("Título da tarefa (obrigatório) : ")
  let descricao = prompt("Descrição da tarefa (opcional) : ")
  let vencimento = prompt("Vencimento da tarefa (obrigatório) : ")
  let prioridade = null
  // Obrigatoriedade de Título e Vencimento 
  while (titulo === null || vencimento === null) {
    console.log("Preencha todos os campos obrigatórios!")
    titulo === null
      ? (titulo = prompt("Título da tarefa : "))
      : console.log()
    vencimento === null
      ? (vencimento = prompt("Vencimentoo da tarefa : "))
      : console.log()
  }
  // Obrigatoriedade de Prioridade
  while(typeof prioridade != typeof "string"){
    prioridade = parseInt(
      prompt(
        "Escolha a prioridade da tarefa (obrigatório) :\n 1 - Baixa\n 2 - Média\n 3 - Alta"
      )
    )
    switch(prioridade){
      case 1:
        prioridade = "Baixa"
        break;
      case 2:
        prioridade = "Média"
        break;
      case 3:
        prioridade = "Alta"
        break;
      default :
        console.log("Opção inválida! Tente uma das opções")
    }
  }
  descricao === null ? descricao = "Sem descrição" : descricao = descricao

  let tarefa = {titulo, descricao, vencimento, prioridade }
  return tarefa
}

export function adicionarTarefa(tarefa) {
  listaTarefas.push(tarefa)
}

export function removerTarefa(tarefa) {
  const index = listaTarefas.findIndex((t) => t.titulo === tarefa.titulo)
  if (index != -1) {
    const decisao = parseInt(prompt("Deseja remover essa tarefa? Essa ação não poderá ser desfeita.\n 1 - Sim\n 2 - Não"))
    if (decisao === 1) {
      listaTarefas.splice(index, 1)
      console.log(`Tarefa : ${tarefa.titulo} removida. `)
    } else {
      console.log("Ação cancelada!")
    }
  } else {
    console.log(`Tarefa : ${tarefa.titulo} não encontrada.`)
  }
}

export function marcarTarefa() {
  for(let tarefa of listaTarefas){
    console.log(`Título : ${tarefa.titulo}`)
  }
  const opcao = prompt(`Qual tarefa marcar como concluída : `)
  const index = listaTarefas.findIndex((t) => t.titulo === opcao)
  if (index != -1) {
      console.log(`Tarefa ${listaTarefas[index].titulo} marcada como concluída!`)
    listaTarefasConc.push(listaTarefas[index])
    listaTarefas.splice(index,1)
  } else {
    console.log(`${opcao} não foi encontrado na lista de tarefas.`)
  }
}

export function pesquisarTarefaDescricao() {
  const descricao = prompt("Descrição da tarefa : ").trim()
  if (descricao.length >= 3) {
    for (let tarefa of listaTarefas) {
        const tarefaDescricao = tarefa.descricao
        if(tarefaDescricao.includes(descricao) != -1){
          console.log(`Título : \n ${tarefa.titulo}\n Descrição : ${tarefa.descricao} \n Data de Vencimento : ${tarefa.vencimento} \n Prioridade : ${tarefa.prioridade}`)
        } else if (tarefa === listaTarefas[listaTarefas.length - 1]){
          console.log("Tarefa não encontrada ")   
        }
      }
    }
}

export function pesquisarTarefaTitulo(){
  const tituloPesq = prompt("Título da tarefa : ").trim()
  const index = listaTarefas.findIndex((tarefa) => tarefa.titulo === tituloPesq)
  if(index != -1){
    return listaTarefas[index] 
  } else {
    console.log("Tarefa não encontrada.")
  }
}

export function resumoTarefa() {
  console.log(`Próxima tarefa a concluir : ${listaTarefas[0]}
    Número total de tarefas : ${listaTarefas.length}
    Número de tarefas pendentes : ${listaTarefas.length}
    Número de tarefas concluídas : ${listaTarefasConc.length}`)
}

export function exibirTarefas(){
    console.log(` --- Lista de Tarefas --- \n`)
    for (let tarefa of listaTarefas){
    console.log(`\u2610 Título : ${tarefa.titulo}
      Prioridade : ${tarefa.prioridade}
      Vencimento : ${tarefa.vencimento}
      Descrição : ${tarefa.descricao}\n`)
  }
}

export function exibirTarefasConcluidas(){
    console.log(` --- Lista de Tarefas Concluídas --- \n`)
    for (let tarefa of listaTarefasConc){
    console.log(`\u2611 ${tarefa.titulo}
      Prioridade : ${tarefa.prioridade}
      Vencimento : ${tarefa.vencimento}
      Descrição : ${tarefa.descricao}\n`)
    }
}
