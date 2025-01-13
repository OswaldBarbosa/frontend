# Gerenciador de tarefas

Este é o frontend de um aplicativo de gerenciamento de tarefas, desenvolvido com React. Ele se comunica com o backend para realizar operações como listar, criar, editar e excluir tarefas.

## Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- Gerenciador de pacotes ([npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/))

### Passos

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/OswaldBarbosa/frontend
   ```
   
2. **Navegue até o diretório do projeto:**
   
   ```bash
   cd frontend
   ```
   
3. **Instale as dependências:**
 
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

## Funcionalidades

A aplicação oferece as seguintes funcionalidades:

* **Lista de tarefas:** Exibe todas as tarefas disponíveis.

* **Criar tarefa:** Permite criar novas tarefas, com título e descrição.

* **Editar tarefa:** Permite editar as informações de uma tarefa existente.

* **Excluir tarefa:** Permite excluir uma tarefa.

## Decisões técnicas

* **React com Vite:** Optamos por React devido à sua flexibilidade e capacidade de criar interfaces dinâmicas e reativas. A escolha do Vite como bundler foi feita pela sua velocidade superior, que proporciona um ciclo de desenvolvimento mais ágil e atualizações quase em tempo real.

* **TypeScript:** Utilizamos TypeScript para garantir uma tipagem estática, melhorando a previsibilidade e a manutenção do código ao longo do desenvolvimento.

* **Axios:** O Axios foi escolhido para realizar chamadas HTTP devido à sua simplicidade e suporte a Promises. Ele facilita o gerenciamento de requisições assíncronas, tratamento de erros e oferece recursos como interceptadores, o que melhora a comunicação com a API backend.

* **Modais:** Utilização de modais para interação com o usuário, proporcionando uma experiência de uso mais fluida e menos intrusiva.

## Possíveis melhorias futuras

* **Autenticação de usuários:** Implementação de autenticação para garantir que apenas usuários autenticados possam manipular as tarefas.

* **Melhorias na UI:** Adicionar mais interatividade e feedback visual, como animações de transição e indicadores de carregamento, para uma experiência do usuário mais fluida.

* **Validação de Formulário:** Melhorar a validação de campos de entrada para garantir que os dados enviados sejam sempre válidos e fornecer feedback em tempo real ao usuário.
  
* **Testes Automatizados:** Implementar uma suíte de testes automatizados para garantir a estabilidade da aplicação em alterações futuras e reduzir o risco de introduzir bugs.

## Tecnologias utilizadas

* React

* Vite

* Axios

* CSS

* TypeScript

## Deploy

O frontend da aplicação está disponível online através do Railway. Você pode acessá-lo [aqui](https://frontend-production-5d8c.up.railway.app/).
