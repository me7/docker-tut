const app = require('polka')()
const { getTable } = require('./db')

app
    .get('/', (req, res) => {
        getTable()
            .then(ret => {
                let d = { date: new Date() }
                ret = { ...ret, ...d }
                res.end(JSON.stringify(ret))
            })
    })
    .listen(3000)