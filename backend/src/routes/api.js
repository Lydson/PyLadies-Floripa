const express = require('express');
const router = express.Router();


router.get('/test', (req, res) => {
    res.json({ message: 'Rota de teste funcionando!' });
});


router.post('/eventosProjetos', (req, res) => {
    const { nome, descricao, data, local } = req.body;

    res.json({
        message: 'Evento cadastrado com sucesso!',
        dados: { nome, descricao, data, local }
    });
});


router.post('/inscricao', (req, res) => {
    const { nomePessoa, email, idEventoProjeto } = req.body;

    res.json({
        message: 'Inscrição realizada com sucesso!',
        dados: { nomePessoa, email, idEventoProjeto }
    });
});

module.exports = router;
