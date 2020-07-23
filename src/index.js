const express = require('express');
const { countries, languages } = require('countries-list');

const app = express();
app.get('/', (request, response) => {
  response.status(200).send('hi');
});

app.get('/country', (request, response) => {
  console.log('query', request.query);
  response.json(countries[request.query.code]);
});
app.get('/languages/:lang', (request, response) => {
  console.log('params', request.params);
  const lang = languages[request.params.lang];
  if (lang) {
    response.json(lang);
  } else {
    response.status(404).json({ status: 'NOT FOUND' });
  }
});
app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

app.listen(4000, () => {
  console.log('server running at 4000');
});
