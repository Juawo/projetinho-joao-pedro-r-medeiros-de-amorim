import { criarTarefa, adicionarTarefa,removerTarefa, marcarTarefa, editarTarefa} from "./modules/funcoesCRUD";
import { resumoTarefa, exibirTarefas, exibirTarefasConcluidas, filtrarTarefasPrioridade, ordenarTarefasPrioridade, ordenarTarefasVencimento, ordenarTarefasData } from "./modules/funcoesExibir";
import { pesquisarTarefaDescricao, pesquisarTarefaTitulo } from "./modules/funcoesPesquisa";
import { exibirMenu } from "./modules/menu";

let loop = true

while (loop) {
    const opcao = exibirMenu()
    
    switch(opcao){
        case 1:
            adicionarTarefa(criarTarefa())
            break;
        case 2:
            marcarTarefa()
            break;
        case 3:
            removerTarefa(pesquisarTarefaTitulo())
            break;
        case 4:
            editarTarefa(pesquisarTarefaTitulo())
            break;
        case 5:
            const exibir = parseInt(prompt(`\n 1 - Exibir lista tarefas disponiveis\n 2 - Exibir tarefas concluídas\n Digite : `))
            exibir === 1 ? exibirTarefas() : exibirTarefasConcluidas()
            break;
        case 6:
            const escolha = parseInt(prompt(`\n 1 - Pesquisar por Título\n 2 - Pesquisar por Descrição\n Digite : `))

            escolha === 1 ? pesquisarTarefaTitulo(true) : pesquisarTarefaDescricao()
            break;
        case 7:
            const filtrar = parseInt(prompt(` 1 - Filtrar por Prioriade\n 2 - Filtrar por Vencimento\n 3 - Filtrar por Data de Criação\n Digite : `))
            filtrar === 1 && filtrarTarefasPrioridade()
            filtrar === 2 && filtrarTarefasVencimento()
            filtrar === 3 && filtrarTarefasData()
            exibirTarefas()
            break;
        case 8:
            const ordenar = parseInt(prompt(` 1 - Ordenar por Prioriade\n 2 - Ordenar por Vencimento\n 3 - Ordenar por Data de Criação\n Digite : `))
            ordenar === 1 && ordenarTarefasPrioridade()
            ordenar === 2 && ordenarTarefasVencimento()
            ordenar === 3 && ordenarTarefasData()
            exibirTarefas()
            break;
        case 9:
            resumoTarefa()
            break;
        case 0:
            loop = false
            break;
        default:
            console.log("Opção inválida!")
            break
    }
}