const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 2525;

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Todo OK. Servidor escuchando en http://localhost:${port}`))
