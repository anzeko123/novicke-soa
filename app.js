const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.use(cors());


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))


const index = require("./routes/index")
app.use('/', index)



app.get('/', (req, res) => {
    res.render('./index');
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('App is running');
});

module.exports = app;