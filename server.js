const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rotas
//const routes = require('./routes/index');
//app.use('/', routes);


app.get("/", (req, res) => {
  res.send("Taskador")
})
// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});