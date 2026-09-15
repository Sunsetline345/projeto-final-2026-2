const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/dogs', async (req, res) => {
  try {
    const nome = req.query.name || '';

    const url = nome
      ? `https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(nome)}`
      : 'https://api.api-ninjas.com/v1/dogs';

    const resposta = await fetch(url, {
      headers: {
        'X-Api-Key': process.env.API_NINJAS_KEY
      }
    });

    if (!resposta.ok) {
      return res.status(resposta.status).json({
        erro: 'A API Ninjas retornou um erro.'
      });
    }

    const dados = await resposta.json();

    res.json(dados);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: 'Erro ao consultar a API.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});