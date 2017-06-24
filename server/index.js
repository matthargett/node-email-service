const app = require('express')();

let totalEmails = 0;

app.get('/stats', (request, response) => response.status(200).
    json({'emailCount': totalEmails}));

app.post('/email', (request, response) => {
    response.sendStatus(200);
    totalEmails++;
});

app.listen(process.env.PORT || 3000);

module.exports = app;

