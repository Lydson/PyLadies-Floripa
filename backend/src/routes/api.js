const express = require('express');
const router = express.Router();
const { createEventLive, subscribeEventLive, subscribeProject } = require('../database/db');

router.post('/cadastroEventoPresencial', (req, res) => {

    const { nomeEvento, dataEvento, horario, local, descricao } = req.body;

    createEventLive(nomeEvento, dataEvento, horario, local, descricao)

    try {
        res.json({
            message: 'Evento cadastrado com sucesso!',
            dados: { nomeEvento, dataEvento, horario, local, descricao }
        });
    }
    catch (error) {
        console.error('Erro ao cadastrar evento:', error);
        res.status(500).json({ message: 'Erro ao cadastrar evento.' });
    }

    console.log(
        `\nEVENTO CADASTRADO COM SUCESSO!` +
        `\nNome Evento: ${nomeEvento}` +
        `\nData do Evento: ${dataEvento}` +
        `\nHorario: ${horario}` +
        `\nlocal: ${local}` +
        `\nDescricao: ${descricao}\n`
    );
});


router.post('/inscricaoEventoPresencial', (req, res) => {

    const { nome, email, experiencia, referencia, autorizacaoImagem, idEvento } = req.body;

    subscribeEventLive(nome, email, experiencia, referencia, autorizacaoImagem, idEvento)

    try {
        res.json({
            message: 'Inscrição no evento presencial realizada com sucesso!',
            dados: { nome, email, experiencia, referencia, autorizacaoImagem, idEvento }
        });
    }
    catch (error) {
        console.error('Erro ao realizar inscrição:', error);
        res.status(500).json({ message: 'Erro ao realizar inscrição.' });
    }

    console.log(
        `\nINSCRIÇÃO PRESENCIAL REALIZADA COM SUCESSO!` +
        `\nNome: ${nome}` +
        `\nEmail: ${email}` +
        `\nExperiência: ${experiencia}` +
        `\nReferencia: ${referencia}` +
        `\nAutorizo Imagem: ${autorizacaoImagem}`
        // `\nID do Evento: ${idEvento}\n`
    );
});


router.post('/inscricaoProjeto', (req, res) => {

    const { nome, email, experiencia, referencia, autorizacaoImagem, idEvento } = req.body;

    subscribeProject(nome, email, experiencia, referencia, autorizacaoImagem, idEvento)

    try {
        res.json({
            message: 'Inscrição no projeto realizada com sucesso!',
            dados: { nome, email, experiencia, referencia, autorizacaoImagem, idEvento }
        });
    }
    catch (error) {
        console.error('Erro ao realizar inscrição:', error);
        res.status(500).json({ message: 'Erro ao realizar inscrição.' });
    }

    console.log(
        `\nINSCRIÇÃO EM PROJETO REALIZADA COM SUCESSO!` +
        `\nNome: ${nome}` +
        `\nEmail: ${email}` +
        `\nExperiência: ${experiencia}` +
        `\nReferencia: ${referencia}` +
        `\nAutorizo Imagem: ${autorizacaoImagem}`
        // `\nID do Projeto: ${idEventoProjeto}\n`
    );
});

module.exports = router;
