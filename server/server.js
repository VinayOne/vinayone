const express = require('express');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const apiRoute = require('./routes/api.route');

const app = express();
const browserDistPath = path.join(__dirname, '../dist/vinayone/browser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRoute);
app.use(express.static(browserDistPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(browserDistPath, 'index.html'));
});

const port = Number(process.env.PORT || 3400);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
