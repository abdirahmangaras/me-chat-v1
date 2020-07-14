const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3200;

var textsSend = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('chat', { see: textsSend });
});

app.post('/', function (req, res) {
  var text = req.body.sendText;

  textsSend.push(text);
  res.redirect('/');
});
app.listen(PORT, function () {
  console.log('The sever Started at ', PORT);
});
