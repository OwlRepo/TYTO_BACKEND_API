const express = require('express');
const path = require('path');
const app = express();
const logs = require('./middleware/logs');
const router = require('./routes/router');
require('mongoose');

// logs
app.use(logs);
// index html
app.use(express.static('./public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


//views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/api', (req, res) => {
res.render('indexx') 
});
app.use('/api', router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ',PORT));