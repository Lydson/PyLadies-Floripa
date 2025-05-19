# PyLadies Floripa - Website Oficial

## Sobre o Projeto

Este é o site da PyLadies Floripa, um grupo focado em incentivar a participação de mulheres na programação e na comunidade Python. O site foi desenvolvido como parte do nosso Projeto Integrador do Senac. Abaixo o link para acessar o site no Vercel:

<https://pyladies-floripa.vercel.app/>

## Equipe

Este projeto está sendo desenvolvido por um grupo de seis integrantes do curso de Tecnologia em Sistemas para Internet do Senac, incluindo membros da comunidade PyLadies.

- Cristiane Silva San Miguel
- Lydson Henrique San Miguel Garcia
- Raphael Honorato e Silva
- Thiago de Holanda Silva
- Tiago Tinoco Martins dos Santos
- Nikolas Isler da Costa

## Objetivo

Criar um Single Page Application (SPA) responsivo e moderno para a PyLadies Floripa, facilitando o acesso a informações sobre eventos, projetos, membros e formas de participação na comunidade.

## Tecnologias Utilizadas

- **React.js + Vite** com Vite para desenvolvimento front-end
- **Node.js + Express**
- **Bootstrap** para estilização
- **Figma** para prototipação da interface do usuário
- **GitHub** para controle de versão e colaboração

## Estrutura do Site

O site segue uma abordagem de **long strip**, onde a navegação ocorre dentro de uma página principal com seções bem definidas:

- **Hero Section:** Chamada para que novas usuárias se juntem à PyLadies Floripa.
- **Sobre:** Apresentação da iniciativa e seus objetivos.
- **Eventos:** Lista de próximos eventos, com modais interativos para mais detalhes.
- **Projetos:** Informações sobre iniciativas da comunidade, também com modais.
- **Membros:** Destaca algumas participantes e suas contribuições.
- **Contato:** Formulário para inscrição e envolvimento na comunidade.

## Diagrama Entidade-Relacionamento (DER)

O diagrama abaixo representa o modelo de dados utilizado no sistema PyLadies Floripa. Ele foi criado com base nas necessidades da aplicação e serve como referência para o desenvolvimento do backend e do banco de dados.

![Diagrama Entidade-Relacionamento do PyLadies Floripa](https://github.com/Lydson/PyLadies-Floripa/blob/main/documentacao/Diagrama_Entidade_Relacionamento_Pyladies.jpeg?raw=true)

Descrição das Entidades:

### Inscrição

Armazena os dados de participantes inscritos, como nome, e-mail, nível de experiência, referências e autorização de uso de imagem.

- Chave primária: idInscricao.
- Se relaciona com a entidade Evento, indicando a qual evento a inscrição pertence.

### Evento

Contém informações sobre os eventos promovidos, incluindo tema, data, horário, local, descrição e observações.

- Chave primária: idEvento.

## Prototipação no Figma

O design do site foi criado no Figma e pode ser acessado neste link:
[**Protótipo no Figma**](https://www.figma.com/design/PZI7I2eIyr81m0OI3Lam5L/GRUPO-2---SITE.-PYLADIES?node-id=63-262&t=61I3y6mtkeAX1czI-1)

Abaixo uma imagem de como ficou o protótipo:
![Página principal da Pyladies Floripa](https://github.com/Lydson/PyLadies-Floripa/blob/main/frontend/src/assets/SPA%20-%20PyLadies%20Floripa.png)

## Backend

O backend do projeto é desenvolvido com **Node.js** e utiliza o framework **Express** para a criação de APIs RESTful. A estrutura do projeto é modularizada, facilitando a manutenção e escalabilidade.

### Estrutura de Pastas

- `index.js`: Arquivo principal que inicializa o servidor, configura middlewares como `cors`, `morgan` e define as rotas da aplicação.
- `routes/api.js`: Contém as definições das rotas da API.
- `database/db.js`: Configuração da conexão com o banco de dados MySQL.

### Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configurar o servidor e a conexão com o banco de dados.
Para rodar o projeto localmente, crie um arquivo `.env` na raiz da pasta `backend` com o seguinte formato:

```env
PORT=3001
DATABASE_URL=mysql://usuario:senha@endereco:porta/nome_do_banco

```

---

### BANCO DE DADOS

Obanco de dados foi construído com MySQL e contém duas tabelas principais: `eventos`, `inscricoes`. Abaixo estão os modelos de cada tabela, juntamente com as rotas disponíveis para interagir com o banco de dados.

### Modelo da tabela de EVENTOS

``` sql
CREATE TABLE `eventos` (
  `idEvento` int NOT NULL AUTO_INCREMENT,
  `nomeEvento` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `dataEvento` date NOT NULL,
  `horario` time NOT NULL,
  `local` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`idEvento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

```

### Modelo da tabela de INSCRIÇÕES

``` sql
CREATE TABLE `inscricoes` (
  `idInscricao` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `experiencia` text COLLATE utf8mb4_general_ci,
  `referencia` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `autorizacaoImagem` text COLLATE utf8mb4_general_ci,
  `idEvento` int DEFAULT NULL,
  PRIMARY KEY (`idInscricao`),
  KEY `fk_evento` (`idEvento`),
  CONSTRAINT `fk_evento` FOREIGN KEY (`idEvento`) REFERENCES `eventos` (`idEvento`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

### Rotas

| Método | Rota | Descrição |
|-------------|-------------|-------------|
|  POST   | /api/cadastroEventoPresencial       | Cadastrar um novo evento presencial.      |
|  POST  |  /api/inscricaoEventoPresencial | Realiza a inscrição em um evento presencial. |
| POST      | /api/inscricaoProjeto      | Realiza a inscrição em um projeto online.      |

## **POST** `api/cadastroEventoPresencial`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash

{
    "nomeEvento": "Encontro Floripa",
    "dataEvento": "10/07/2025",
    "horario": "13:00",
    "local": "Florianópolis",
    "descricao": "Junte-se a nós no Encontro PyLadies Floripa! 🚀✨ Será uma manhã de aprendizado, networking e troca de experiências sobre Python, tecnologia e inclusão no mundo da programação."
}

```

### **Resposta**

**Status Code: 201 OK**

```bash
{
    "message": "Evento cadastrado com sucesso!",
    "dados": {
        "nomeEvento": "Encontro Floripa",
        "dataEvento": "10/07/2025",
        "horario": "13:00",
        "local": "Florianópolis",
        "descricao": "Junte-se a nós no Encontro PyLadies Floripa! 🚀✨ Será uma manhã de aprendizado, networking e troca de experiências sobre Python, tecnologia e inclusão no mundo da programação."
    }

```

## **POST** `/inscricaoEventoPresencial`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash

{
{
    "nome": "João da Silva",
    "email": "joao@email.com",
    "experiencia": "sim",
    "referencia": "instagram",
    "autorizacaoImagem": true,
    "idEvento": 1
}
}

```

### **Resposta**

**Status Code: 201 OK**

```bash
{
    "message": "Inscrição no evento presencial realizada com sucesso!",
    "dados": {
        "nome": "João da SIlva",
        "email": "joao@email.com",
        "experiencia": "sim",
        "referencia": "instagram",
        "autorizacaoImagem": true,
        "idEvento": 1
    }

```

## **POST** `/inscricaoProjeto`

### **Headers**

- `Content-Type`: `application/json`

### **Body**

```bash

{
{
    "nome": "Maria Joana",
    "email": "maria@email.com",
    "experiencia": "nao",
    "referencia": "youtube",
    "autorizacaoImagem": true,
    "idEvento": 2
}
}

```

### **Resposta**

**Status Code: 201 OK**

```bash
{
    "message": "Inscrição no evento presencial realizada com sucesso!",
    "dados": {
      "nome": "Maria Joana",
      "email": "maria@email.com",
      "experiencia": "nao",
      "referencia": "youtube",
      "autorizacaoImagem": true,
      "idEvento": 2
    }

```


## Como contribuir

1. Clone o repositório:

   ```sh
   git clone git@github.com:Lydson/PyLadies-Floripa.git
   ```

2. Instale as dependências:

   ```sh
   cd frontend
   npm install

   cd backend
   npm install
   ```

3. Rode o projeto localmente:

   ```sh
   npm run dev
   ```

4. Para contribuir, crie um branch e faça um pull request!

---
Siga as [PyLadies Floripa](https://www.instagram.com/pyladiesfloripa/) e participe da comunidade! 🚀

