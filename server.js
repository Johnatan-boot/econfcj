const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/econfcj'));

app.get('/*',(_req,res) =>{
res.sendFile(__dirname + '/dist/econfcj/index.html');
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na Porta ' + PORT);
})
