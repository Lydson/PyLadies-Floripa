require('dotenv').config();


async function connect() {

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(process.env.URL_DB);
    console.log('BANCO DE DADOS CONECTADO');
    global.connection = connection;
    return connection;
}

async function createEventLive(nomeEvento, dataEvento, horario, local, descricao) {
    try {
        const connection = await connect();

        const sql = `INSERT INTO eventos (nomeEvento, dataEvento, horario, local, descricao)
                     VALUES (?, ?, ?, ?, ?)`;

        const values = [nomeEvento, dataEvento, horario, local, descricao];

        const [result] = await connection.execute(sql, values);

        console.log('Evento presencial cadastrado com sucesso! ID:', result.insertId);
    } catch (error) {
        console.error('Erro ao cadastrar evento presencial:', error);
    }
}


async function subscribeEventLive(nome, email, experiencia, referencia, autorizacaoImagem, idEvento) {
    try {
        const connection = await connect();

        const sql = `INSERT INTO inscricoes (nome, email, experiencia, referencia, autorizacaoImagem, idEvento)
                     VALUES (?, ?, ?, ?, ?, ?)`;

        const values = [nome, email, experiencia, referencia, autorizacaoImagem, idEvento];

        const [result] = await connection.execute(sql, values);

        console.log('Inscrição no evento presencial realizada com sucesso! ID:', result.insertId);
    } catch (error) {
        console.error('Erro ao realizar inscrição no evento presencial:', error);
    }
}


async function subscribeProject(nome, email, experiencia, referencia, autorizacaoImagem, idEvento) {
    try {
        const connection = await connect();

        const sql = `INSERT INTO inscricoes (nome, email, experiencia, referencia, autorizacaoImagem,idEvento)
                     VALUES (?, ?, ?, ?, ?, ?)`;

        const values = [nome, email, experiencia, referencia, autorizacaoImagem, idEvento];

        const [result] = await connection.execute(sql, values);

        console.log('Inscrição adicionada com sucesso! ID:', result.insertId);
    } catch (error) {
        console.error('Erro ao inserir inscrição:', error);
    }
}


module.exports = {
    connect,
    subscribeProject,
    createEventLive,
    subscribeEventLive
}
