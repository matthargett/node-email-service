const app = require('express')();

let emails = 0;

app.get('/stats', (request, response) => response.send('total emails sent: ' + emails));
app.post('/email', (request, response) => {
    response.sendStatus(200);
    emails++;
});
app.listen(process.env.PORT || 3000);

