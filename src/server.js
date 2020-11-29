const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/mi-administrador-front'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/mi-administrador-front/'}
  );
  });

app.listen(process.env.PORT || 4200);