const express = require('express')
const app = express()
const port = 3000

const listener = () => console.log(`Partyin on port ${port}!`)
app.listen(port, listener)


app.get('/ping', (req, res) => {
  const message = 'pong!'
  console.log(`ON THE SERVER: ${message}`)
  res.send(`RESPONDING TO THE CLIENT: ${message}`)
})

console.log(typeof app.listen)
