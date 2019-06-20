const app = require('polka')()

app
    .get('/', (req, res) => { res.end(`Hello from polka, time now is ${new Date()}`) })
    .listen(3000)