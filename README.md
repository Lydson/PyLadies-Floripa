# PyLadies Floripa - Website Oficial

## Sobre o Projeto
Este é o site oficial da PyLadies Floripa, um grupo focado em incentivar a participação de mulheres na programação e na comunidade Python. O site foi desenvolvido como parte do nosso Projeto Integrador no Senac. Abaixo o link para acessar o site no Vercel:
https://pyladies-floripa.vercel.app/

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

## Diagrama Entidade-Relacionamento (DER)
O diagrama abaixo representa o modelo de dados utilizado no sistema PyLadies Floripa. Ele foi criado com base nas necessidades da aplicação e serve como referência para o desenvolvimento do backend e do banco de dados.

![Diagrama Entidade-Relacionamento do PyLadies Floripa](https://github.com/Lydson/PyLadies-Floripa/blob/main/frontend/src/assets/Diagrama_Entidade_Relacionamento_Pyladies.jpeg?raw=true)

Descrição das Entidades:
### Inscrição
Armazena os dados de participantes inscritos, como nome, e-mail, nível de experiência, referências e autorização de uso de imagem.
- Chave primária: id_inscricao.
- Se relaciona com a entidade Evento, indicando a qual evento a inscrição pertence.

### Evento
Contém informações sobre os eventos promovidos, incluindo tema, data, horário, local, descrição e observações.
- Chave primária: id_evento.

### Projeto
Armazena os projetos apresentados nos eventos ou realizados pela organização. Cada projeto possui um nome, objetivo, descrição, público-alvo e formato.
- Chave primária: id_projeto.

## Tecnologias Utilizadas
- **React.js** com Vite para desenvolvimento front-end
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

### Variáveis de Ambiente
Este projeto utiliza variáveis de ambiente para configurar o servidor e a conexão com o banco de dados.
Para rodar o projeto localmente, crie um arquivo `.env` na raiz da pasta `backend` com o seguinte formato:
```env
PORT=3001
DATABASE_URL=postgres://usuario:senha@host:porta/banco


## Como contribuir
1. Clone o repositório:
   ```sh
   git clone https://github.com/Lydson/pyladies-site.git
   ```
2. Instale as dependências:
   ```sh
   cd pyladies-site
   npm install
   ```
3. Rode o projeto localmente:
   ```sh
   npm run dev
   ```
4. Para contribuir, crie um branch e faça um pull request!

---
Siga as [PyLadies Floripa](https://www.instagram.com/pyladiesfloripa/) e participe da comunidade! 🚀

