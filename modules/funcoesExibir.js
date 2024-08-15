import { listaTarefas } from "./listaTarefas"
import { listaTarefasConc } from "./listaTarefas"

export function resumoTarefa() {
    console.log(`      Próxima tarefa a concluir : ${listaTarefas[0].titulo}
      Número de tarefas pendentes : ${listaTarefas.length}
      Número de tarefas concluídas : ${listaTarefasConc.length}
      Número total de tarefas : ${listaTarefas.length + listaTarefasConc.length}`)
}
  
export function exibirTarefas(lista = listaTarefas){
      console.log(` --- Lista de Tarefas --- \n`)
      for (let tarefa of lista){
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
  
export function filtrarTarefas(){
    const opcao = parseInt(prompt("Filtrar por prioridade :\n 1 - Baixa\n 2 - Média\n 3 - Alta\n Digite : "))
    switch(opcao){
      case 1:
        const tarefasBaixaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Baixa")
        console.log(`\n --- Tarefas com prioridade Baixa --- \n`)
        exibirTarefas(tarefasBaixaPrioridade)
        break;
      case 2:
        const tarefasMediaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Média")
        console.log(`\n --- Tarefas com prioridade Média --- \n`)
        exibirTarefas(tarefasMediaPrioridade)
        break;
      case 3:
        const tarefasAltaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Alta")
        console.log(`\n --- Tarefas com prioridade Alta --- \n`)
        exibirTarefas(tarefasAltaPrioridade)
        break;
      default:
        console.log("Opção inválida!")
    }
}
  
export function ordenarTarefas(lista = listaTarefas){
  listaTarefas.sort((tarefa1,tarefa2) => {
    const prioridades = ['Baixa','Média','Alta']
    return prioridades.indexOf(tarefa2.prioridade) - prioridades.indexOf(tarefa1.prioridade)
  })
  console.log("Lista ordenada!")
  return lista
}


