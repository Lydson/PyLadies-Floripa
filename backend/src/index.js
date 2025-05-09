require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Rotas
app.use('/api', apiRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
});
