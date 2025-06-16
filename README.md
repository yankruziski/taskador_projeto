
# Taskador

## Yan Dimitri Kruziski
Gerenciador de tarefas moderno e intuitivo para organização e produtividade pessoal. Permite criar, editar, concluir, filtrar e acompanhar tarefas futuras com armazenamento seguro e sincronização em tempo real (Supabase). Ideal para planejamento claro e eficiente.

### Requisitos

- Node.js (versão v22.13.1)
- PostgreSQL (versão 15.8)

### Estrutura de Pastas 

controllers: Contém os controladores, responsáveis por receber as requisições do cliente, processar os dados (geralmente interagindo com os modelos) e retornar as respostas apropriadas. Cada controlador geralmente corresponde a uma entidade ou recurso da aplicação.

models: Abriga os modelos de dados, que definem a estrutura das entidades da aplicação e encapsulam a lógica de acesso ao banco de dados. Utilizando ORMs como Sequelize ou Mongoose, os modelos representam as tabelas ou coleções do banco de dados e fornecem métodos para manipulação dos dados.

views: Contém as visualizações, responsáveis pela apresentação dos dados ao usuário. Utilizando motores de template como EJS, Handlebars ou Pug, as views geram o HTML que será renderizado no navegador.
routes:Define as rotas da aplicação, mapeando os endpoints às funções correspondentes nos controladores. Essa separação permite uma organização clara das rotas e facilita a manutenção.

public: Armazena arquivos estáticos acessíveis diretamente pelo navegador, como folhas de estilo (CSS), scripts JavaScript do lado do cliente, imagens e fontes. Esses arquivos são servidos sem processamento adicional pelo servidor.

config: Contém arquivos de configuração da aplicação, como as configurações de conexão com o banco de dados, variáveis de ambiente e outras configurações globais. Centralizar essas configurações facilita a gestão e a alteração de parâmetros sem modificar o código-fonte principal.

services: Inclui serviços que encapsulam a lógica de negócio da aplicação, separando-a dos controladores. Essa camada permite reutilizar funcionalidades em diferentes partes da aplicação e manter os controladores mais enxutos.

middlewares: Contém funções intermediárias que processam as requisições antes de chegarem aos controladores. Exemplos comuns incluem autenticação, validação de dados e registro de logs.

repositories: Implementa a camada de acesso a dados, abstraindo as operações de leitura e escrita no banco de dados. Essa separação permite trocar ou modificar a fonte de dados com impacto mínimo nas outras partes da aplicação.

utils: Armazena funções utilitárias e helpers que são usadas em diversas partes da aplicação, como formatação de datas, geração de IDs únicos e outras funções auxiliares.

### Acessando os conteúdos
Para utilizar o projeto:

Baixe o repositório no GitHub, conecte-se ao Supabase e 

execute os comandos:

```npm install```

```npm run init-db```

```npm run dev```
Acesse a aplicação no navegador pelo endereço: http://localhost:3001

### Uso do projeto
O sistema foi desenvolvido com foco na simplicidade e consiste em uma única interface principal. Ao ser executado no navegador a partir de http://localhost:3001, a aplicação permite ao usuário realizar as operações essenciais de gerenciamento de tarefas: criar, ler, editar e deletar (CRUD).
<div align="center">
<sub>Figura 1 - Tela inicial Taskador
<img src="documentos\assets\tela_inicio_taskador.png" width="100%">
<sup>Fonte: Material produzido pelo autor (2025)</sup>
</div>
<br>

Após adicionarmos uma tarefa, ela aparecerá no sistema, desta maneira abaixo.

<div align="center">
<sub>Figura 2 - Task Adicionada
<img src="documentos\assets\task_adicionada.png" width="100%">
<sup>Fonte: Material produzido pelo autor (2025)</sup>
</div>
<br>

Abaixo, podemos ver um vídeo demonstrando as funcionalidades e a arquitetura do software
<https://youtu.be/mOFWCsHm7EQ>