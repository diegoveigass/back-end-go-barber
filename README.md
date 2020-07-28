<h1 align="center">
  <img src="https://lh3.googleusercontent.com/KXeyZCwYdhmXATiNH5UzwkweYesVpsGacL6PQEddho5jOsbu1fX-PFvXtJwKrRQ3TdU" width=40%>

  GoBarber - Backend da aplicação
</h1>

# Indice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

---

## 📖 Sobre

Criação do back-end da aplicação GoBarber. Uma aplicação que gerencia agendamentos de clientes nas barbearias cadastradas. Permitindo que o cliente se cadastre na aplicação e marque um agendamento com algum prestador de serviços.

Utilizando tudo que foi assimiliado até agora no **Node.js** juntamente com o **TypeScript**, com banco de dados utilizando o **TypeORM** e o envio dos avatares dos prestadores utilizando o **Multer**.

Algumas funcionalidades foram implementadas, tais como:
- Cadastro de usuários;
- Cadastro e listagem de agendamentos;
- Hash de senha: Gera um hash de senha para o banco de dados, fazendo com que essa senha esteja protegida caso ocorra algum vazamento de informações
- Autenticação JWT: É gerado um token de autenticação caso as credenciais cadastradas no banco de dados estejam corretas e retorna esse token para utilizar nas rotas que necessitam, no caso a rota de /appointments;
- Upload de arquivos: Utilizando o multer foi possível criar uma configuração para o upload de avatar (foto de perfil do usuário).

### **Arquitetura e testes no Node.js**

Nesse módulo foram aplicados arquitetura de software fazendo com que a aplicação seja totalmente escalável, assim também como testes automatizados, e a metodologia TDD (Test Driven Development).

Utilizamos também o DDD (Domain Driven Design) isolando a estrutura pela sua área de domínio, pensando em qual a área de conhecimento daquele módulo/arquivo. Nesse caso foi separado em dois módulos, o módulo de agendamento e de usuário.

**Domain Driven Design**

Utiliza uma metodotologia ágil como o **SCRUM**, nem sempre será utilizado igual para todo tipo de aplicação, não precisamos aplicar todos os conceitos que existem dentro do DDD, utilizamos apenas as funcionalidades que são mais significantes para o momento da aplicação.

**Test Driven Development**

Pode ser utilizado juntamente com o DDD, metodologia de criar testes antes mesmo de criar a funcionalidade. Se criarmos os testes antes conseguimos enxergar de uma maneira mais clara de como nossa aplicação deve funcionar.

### **Continuando back-end do app**

Nesse módulo aplicamos conceitos mais complexos do back-end como relacionamentos, trabalhos em segundo plano, cache, banco de dados não-relacionais e segurança.

### **Finalizando back-end do app**

Nesse módulo foram aplicados as últimas funcionalidades do app e também conceitos do MongoDB, variáveis ambiente, validação, cache e etc.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Multer](https://www.npmjs.com/package/multer)
- [TypeScript](https://www.typescriptlang.org/)
- [jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/#/)
- [date-fns](https://date-fns.org/)
- [cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [mongodb](https://www.mongodb.com/)
- [nodemailer](https://nodemailer.com/about/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [class-transform](https://github.com/typestack/class-transformer)
- [rate-limiter](https://github.com/nfriedly/express-rate-limit)
- [redis](https://redis.io/)
- [celebrate](https://github.com/arb/celebrate)
- [aws-sdk](https://aws.amazon.com/pt/tools/)


---

## 💻 Como baixar o projeto

```bash
  # Clonar repositório
  $ git clone https://github.com/diegoveigass/back-end-go-barber

  # Entrar no diretório
  $ cd back-end-go-barber

  # Instalar as dependências via yarn
  $ yarn

  # Instalar as dependências via npm
  $ npm install

  # Criar uma imagem postgres através do docker
  $ docker run --name ImageName -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

  # Baixar postbird ou dbeaver para criação da database

  # Caso precise editar o nome da database no arquivo ormconfig.json e no './src/database/index.ts'

  # Rodar as migrations
  $ yarn typeorm migration:run

  # Iniciar o projeto
  $ yarn dev:server

  # Verificar os testes
  $ yarn test
```

---

## 🚧 Construção

- **Frontend**: https://github.com/diegoveigass/front-end-go-barber
- **Mobile**: https://github.com/diegoveigass/mobile-go-barber

---

Desenvolvido por Diego Veiga 🚀 [Acesse meu LinkedIn](https://linkedin.com/in/diegoveigass)
