require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

// router per la homepage
function homeRouter(req, res) {
    res.render('index');
}

// GET sulla index
app.get('/', homeRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server in ascolto sulla porta '+process.env.SERVER_PORT);
});
