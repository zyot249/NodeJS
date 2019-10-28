const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');

const config     = require('./config');
let middleware   = require('./middleware');

app.use(bodyParser.urlencoded({
    limit: '50mb', 
    extended: true
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));
