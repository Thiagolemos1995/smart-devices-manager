# ClientManagement

Este é um sistema de gerenciamento de clientes.

Nesta plataforma será possível gerenciar clientes e gerar um plano de percurso
listando em ordem otimizada qual cliente deve ser visitado.

## Tecnologias utilizadas

Foi utilizado como gerenciador do respositório o TurboRepo.

O TurboRepo é uma ferramenta que permite gerenciar múltiplos repositórios e projetos em um único workspace, facilitando a colaboração e o desenvolvimento de projetos.

<a alt="TurboRepo logo" href="https://turborepo.com/docs" target="_blank" rel="noreferrer"><img src="https://images.seeklogo.com/logo-png/42/1/turborepo-logo-png_seeklogo-428038.png" width="45"></a>

---

Para a aplicação Back end foi utilizado NestJS.

O NestJS é um framework Node, que utiliza o padrão typescript, onde podemos desenvolver utilizando injeções de dependências, tornando
mais simples o desenvolvimento das aplicações.

<a alt="Nest logo" href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/28507035?s=48&v=4" width="45"></a>

---

Como banco de dados foi utilizado Postgresql.

O Postgresql é um sistema gerenciador de banco de dados e relacional de código aberto.

<a alt="postgres logo" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" width="45"></a>

---

Para o Front end foi utilizado NextJS.

O NextJS é um framework React, uma poderosa ferramenta de desenvolvimento, onde é possível renderizar componentes e realizar o data fetching no lado do servidor
disponibilizando uma melhor performance para aplicação.

<a alt="Next logo" href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" width="45"></a>

---

Para os componentes foi utilizado a biblioteca Shadcn UI.

Uma biblioteca de componentes completa, versátil e de fácil implementação.

<a alt="Shadcn UI logo" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" width="45"></a>

---

## Instalação do Repositório

Para instalar as dependências no repositório:

- Utilizando npm:

  `npm i`

Para rodar o projeto localmente, basta rodar o comando para iniciar a imagem do banco de dados e depois rodar o comando para iniciar o projeto.

`docker compose up postgres -d`

`npm run dev`

Para rodar as migrations (este passo é necessário somente para a aplicação local), execute o comando dentro da pasta `apps/smart-management-api`:

`cd apps/smart-management-api`

`npm run typeorm migration:run`

Para rodar o projeto em container, com um simples comando é possivel executar o projeto em container.

`docker compose up -d`

Para parar o projeto em container, basta executar o comando:

`docker compose down`

As migrations serão executadas automaticamente quando o container for iniciado.

Serão necessarias as variáveis de ambiente do projeto, é possivel encontrá-las no arquivo `.env.example` dentro de cada aplicação.
se necessário gerar uma nova chave de encriptação, execute o comando:

`openssl rand -base64 32`

e cole a chave gerada no arquivo `.env` dentro de cada aplicação.

### OBSERVAÇÃO

A aplicação quando executada em container está com alguns bugs, para testar corretamente utilize por enquanto a aplicação local.

### Rotas

#### Auth

- `POST /auth/signin`
- `POST /auth/signup`
- `POST /auth/signout`
- `POST /auth/refresh`

#### Devices

- `POST /devices/register`
- `GET /devices`
- `GET /devices/:id`
- `PATCH /devices/:id`
- `DELETE /devices/:id`

#### Users

- `POST /users`
