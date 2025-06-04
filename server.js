// server.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require("path")



const viewRoutes = require('./routes/frontRoutes')

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json())
app.use(express.static("public"))

// Usando as rotas definidas
app.use('/api', routes);
app.use(viewRoutes)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});