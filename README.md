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

Utilizando tudo que foi assimiliado até agora no **node.js** juntamente com o **TypeScript**, com banco de dados utilizando o **TypeORM** e o envio dos avatares dos prestadores utilizando o **Multer**.


---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Multer](https://www.npmjs.com/package/multer)
- [TypeScript](https://www.typescriptlang.org/)
- [jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/#/)

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
```

---

## 🚧 Construção

- **Finalização do backend**: Em construção
- **Frontend**: Em construção
- **Mobile**: Em construção

---

Desenvolvido por Diego Veiga 🚀 [Acesse meu LinkedIn](https://linkedin.com/in/diegoveigass)
