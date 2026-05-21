const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.listen(3000, () => {
    console.log('Escucga desde el el puerto3 3000');
});