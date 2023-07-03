const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'dist/vinayone/browser')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/vinayone/browser', 'index.html'));
});

const port = 3400;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

