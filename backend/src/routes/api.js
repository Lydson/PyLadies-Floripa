const express = require('express');
const router = express.Router();


router.post('/eventosProjetos', (req, res) => {
    const { nome, descricao, data, local } = req.body;

    res.json({
        message: 'Evento cadastrado com sucesso!',
        dados: { nome, descricao, data, local }
    });
});

router.post('/inscricaoEventoPresencial', (req, res) => {
    const { 
        nomePessoa,
        email,
        telefone,
        autorizoImagem,
        idEvento 
    } = req.body;

    res.json({
        message: 'Inscrição no evento presencial realizada com sucesso!',
        dados: {
            nomePessoa,
            email,
            telefone,
            autorizoImagem,
            idEvento
        }
    });

    console.log(
        `\n[INSCRIÇÃO PRESENCIAL]` +
        `\nNome: ${nomePessoa}` +
        `\nEmail: ${email}` +
        `\nTelefone: ${telefone}` +
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
            `\nNome: ${nomePessoa}` +
            `\nEmail: ${email}` +
            `\nExperiência: ${experiencia}` +
            `\nAutorizo Imagem: ${autorizoImagem}` +
            `\nOrigem: ${origem}` +
            `\nID do Evento/Projeto: ${idEventoProjeto}\n`
        ));
});

module.exports = router;
