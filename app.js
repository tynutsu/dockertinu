const config = require('./config');
const express = require('express');

const app = express();
const message = 'Hello Azure Docker Fast Deployment'

app.get('/', (request, response) => {
    response.send(message);
})

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});