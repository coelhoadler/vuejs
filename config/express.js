var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,path =  require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app;