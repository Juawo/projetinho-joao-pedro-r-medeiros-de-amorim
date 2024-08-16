[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/xIJyaq6w)
# Gerenciador de Tarefas - Trabalho em Construção

## Descrição Geral

O **Gerenciador de Tarefas** é um aplicativo desenvolvido para ajudar os usuários a organizar e acompanhar suas tarefas diárias. Ele permite que os usuários adicionem, editem, visualizem e removam tarefas, além de marcar tarefas como concluídas. O sistema oferece funcionalidades de filtragem e ordenação para facilitar a visualização e o gerenciamento das tarefas.

## Funcionalidades Principais

### 1. Adicionar Nova Tarefa

**Descrição:**  
Permite ao usuário criar uma nova tarefa.

**Campos Necessários:**
- **Título da Tarefa:** Uma breve descrição da tarefa.
- **Descrição da Tarefa:** Detalhes adicionais sobre a tarefa.
- **Data de Vencimento:** Data em que a tarefa deve ser concluída.
- **Prioridade:** Nível de importância da tarefa (Baixa, Média, Alta).

**Validação:**  
Todos os campos são obrigatórios, exceto a descrição, que é opcional.

### 2. Listar Tarefas

**Descrição:**  
Exibe todas as tarefas adicionadas pelo usuário.

**Opções de Visualização:**
- Exibir tarefas pendentes e concluídas.
- Ordenar por data de vencimento, prioridade ou data de criação.

**Filtros:**
- Filtrar por status (pendente/concluída).
- Filtrar por prioridade.
- Filtrar por data de vencimento.

### 3. Editar Tarefa

**Descrição:**  
Permite ao usuário atualizar as informações de uma tarefa existente.

**Campos Editáveis:**
- **Título da Tarefa**
- **Descrição da Tarefa**
- **Data de Vencimento**
- **Prioridade**

**Validação:**  
Todos os campos editados devem seguir as mesmas regras de validação da criação de tarefas.

### 4. Remover Tarefa

**Descrição:**  
Permite ao usuário excluir uma tarefa da lista.

**Confirmação:**  
O sistema deve pedir confirmação antes de remover a tarefa.

### 5. Marcar Tarefa como Concluída

**Descrição:**  
Permite ao usuário marcar uma tarefa como concluída.

**Visualização:**  
Tarefas concluídas devem ser exibidas de forma diferente (ex.: riscadas ou com um ícone de check).

### 6. Pesquisar Tarefas

**Descrição:**  
Permite ao usuário buscar tarefas por título ou descrição.

**Funcionalidade de Busca:**  
Deve ser sensível a maiúsculas e minúsculas, e permitir a busca parcial.

### 7. Resumo das Tarefas

**Descrição:**  
Exibe um resumo das tarefas do usuário.

**Informações Incluídas:**
- Número total de tarefas.
- Número de tarefas pendentes.
- Número de tarefas concluídas.
- Próxima tarefa a vencer.
