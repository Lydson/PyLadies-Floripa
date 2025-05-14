const express = require('express');
const router = express.Router();


router.post('/cadastroEventoPresencial', (req, res) => {
    const { nomeEvento, dataEvento, horario, local, descricao } = req.body;

    res.json({
        message: 'Evento cadastrado com sucesso!',
        dados: { nomeEvento, dataEvento, horario, local, descricao }
    });

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
    const {
        nomePessoa,
        email,
        autorizoImagem,
        idEvento
    } = req.body;

    res.json({
        message: 'Inscrição no evento presencial realizada com sucesso!',
        dados: {
            nomePessoa,
            email,
            autorizoImagem,
            idEvento
        }
    });

    console.log(
        `\nINSCRIÇÃO PRESENCIAL REALIZADA COM SUCESSO!` +
        `\nNome: ${nomePessoa}` +
        `\nEmail: ${email}` +
        `\nAutorizo Imagem: ${autorizoImagem}` +
        `\nID do Evento: ${idEvento}\n`
    );
});

router.post('/inscricaoProjeto', (req, res) => {

    const { nomePessoa,
        email,
        experiencia,
        autorizoImagem,
        origem,
        idEventoProjeto
    } = req.body;

    res.json({
        message: 'Inscrição realizada com sucesso!',

        dados: {
            nomePessoa,
            email,
            experiencia,
            autorizoImagem,
            origem,
            idEventoProjeto
        }
    },
        console.log(
            `\nINSCRIÇÃO EM PROJETO REALIZADA COM SUCESSO!` +
            `\nNome: ${nomePessoa}` +
            `\nEmail: ${email}` +
            `\nExperiência: ${experiencia}` +
            `\nAutorizo Imagem: ${autorizoImagem}` +
            `\nOrigem: ${origem}` +
            `\nID do Projeto: ${idEventoProjeto}\n`
        ));
});

module.exports = router;
