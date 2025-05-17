# 📊 Modelo de Dados

Este documento descreve os dados utilizados nas requisições da API do backend desenvolvido com **Node.js** e **Express.js**.

Atualmente, o projeto não armazena os dados em um banco de dados persistente, mas sim os manipula momentaneamente no corpo da requisição (`req.body`). Abaixo estão descritas as estruturas de dados utilizadas em cada rota.

---

## 🔗 Rota: `/api/cadastroEventoPresencial`

**Método:** `POST`  
**Descrição:** Cadastra um evento presencial.

### Dados esperados no corpo da requisição (`req.body`):

| Campo         | Tipo   | Descrição                |
|---------------|--------|--------------------------|
| nomeEvento    | String | Nome do evento           |
| dataEvento    | String | Data do evento (formato livre) |
| horario       | String | Horário do evento        |
| local         | String | Local onde ocorrerá      |
| descricao     | String | Descrição do evento      |

---

## 🔗 Rota: `/api/inscricaoEventoPresencial`

**Método:** `POST`  
**Descrição:** Realiza a inscrição de uma pessoa em um evento presencial.

### Dados esperados:

| Campo           | Tipo    | Descrição                                  |
|------------------|---------|---------------------------------------------|
| nomePessoa       | String  | Nome da pessoa que se inscreve              |
| email            | String  | Email de contato                            |
| autorizoImagem   | Boolean | Se autoriza uso de imagem (sim/não)         |
| idEvento         | String  | ID do evento que está se inscrevendo        |

---

## 🔗 Rota: `/api/inscricaoProjeto`

**Método:** `POST`  
**Descrição:** Inscrição da pessoa em um projeto da PyLadies.

### Dados esperados:

| Campo            | Tipo    | Descrição                                 |
|------------------|---------|--------------------------------------------|
| nomePessoa       | String  | Nome da participante                       |
| email            | String  | Email de contato                           |
| experiencia      | String  | Breve descrição da experiência prévia      |
| autorizoImagem   | Boolean | Se autoriza uso de imagem (sim/não)        |
| origem           | String  | Como conheceu o projeto                    |
| idEventoProjeto  | String  | ID do projeto/evento relacionado            |

---

### 💾 Observação

Apesar de os dados estarem apenas sendo impressos no console atualmente, essa estrutura serve como base para futura integração com um banco de dados.

