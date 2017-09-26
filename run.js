const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './pages');

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res){
    return res.render('main');
})

app.listen(3000)