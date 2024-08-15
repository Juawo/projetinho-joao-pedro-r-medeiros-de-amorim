import { criarTarefa, adicionarTarefa,removerTarefa, marcarTarefa} from "./modules/funcoesIndex";
import { resumoTarefa, exibirTarefas, exibirTarefasConcluidas, filtrarTarefas, ordenarTarefas } from "./modules/funcoesExibir";
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
            exibirTarefas()
            break;
        case 5:
            exibirTarefasConcluidas()
            break;
        case 6:
            const escolha = parseInt(prompt(`\n 1 - Pesquisar por Título\n 2 - Pesquisar por Descrição\n Digite : `))

            escolha === 1 ? pesquisarTarefaTitulo(true) : pesquisarTarefaDescricao()
            break;
        case 7:
            filtrarTarefas()
            break;
        case 8:
            ordenarTarefas()
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