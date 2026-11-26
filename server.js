const express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = process.env.PORT || 3000; 

app.use('/style', express.static(path.join(__dirname, 'style')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'index.html'))); 
app.listen(port, () => console.log(`Nexvar disponível em http://localhost:${port}`));
