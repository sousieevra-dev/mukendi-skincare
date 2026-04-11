const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'publique')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'publique', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'publique', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Mukendi Skin Care started on port ' + PORT);
});
