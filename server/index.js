const express = require('express')
const cors = require('cors')
const app = express()
const port = 9090
app.use(cors())
app.get('/api', (req, res) => {
    res.send("api version 0.0.1")
})
app.get('/', (req, res) => {
    res.send("server version 0.0.1")
})
app.get('/api/eom-auth/get-users', (req, res) => {
    const data = [
        {
            id:1,
            text: "asdf1"
        },
        {
            id: 2,
            text: "asdf2"
        }
    ]
  res.send(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})