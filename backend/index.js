const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello test 1234!!!')
});

app.listen(3333);