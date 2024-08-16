import { listaTarefas } from "./listaTarefas"
import { listaTarefasConc } from "./listaTarefas"

export function criarTarefa() {
  let titulo = prompt("Título da tarefa (obrigatório) : ")
  let descricao = prompt("Descrição da tarefa (opcional) : ")
  let vencimento = prompt("Vencimento da tarefa (obrigatório) : ")
  let prioridade = null
  // Obrigatoriedade de Título e Vencimento 
  while (titulo === null || vencimento === null) {
    console.log("Preencha todos os campos obrigatórios!\n")
    titulo === null && (titulo = prompt("Título da tarefa : "))
    vencimento === null && (vencimento = prompt("Vencimento da tarefa : "))
  }
  // Obrigatoriedade de Prioridade
  while(typeof prioridade != typeof "string"){
    prioridade = parseInt(prompt("Escolha a prioridade da tarefa (obrigatório) :\n 1 - Baixa\n 2 - Média\n 3 - Alta\n Digite : "))
    
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
  
  descricao === null ? descricao = "" : descricao = descricao

  let tarefa = {titulo, descricao, vencimento, prioridade }
  return tarefa
}

export function adicionarTarefa(tarefa) {
  listaTarefas.push(tarefa)
}
const objeto = {teste : 'teste'}
export function removerTarefa(tarefa) {
  if(typeof tarefa === typeof objeto){
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

export function editarTarefa(tarefa){
  for(let propiedade in tarefa){
    const resposta = parseInt(prompt(`Deseja alterar ${propiedade} ?\n 1 - Sim\n 2 - Não`))
    if(resposta === 1){
      tarefa[propiedade] = prompt(`Edite o campo ${propiedade} : `)
      while(tarefa[propiedade] === null){
        if(propiedade == 'descricao'){
          tarefa[propiedade] = ''
        } else {
          tarefa[propiedade] = prompt(`Edite o campo ${propiedade} : `)
        }
      }
    } else {
      console.log(`Campo ${propiedade} não alterado.`)
    }
  }
}