const express = require('express')
const app = express()
const port = 3001
let randomList = []

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/', (req, res) => {
  res.send('Hello World! 2')
})

app.put('/request', (req, res) => { 
  let departure = Math.round(Math.random()*1000);
  let arrival = Math.round(Math.random()*1000);
  while(departure === arrival)
    arrival = Math.random()%1000
  randomList.push(`Request from ${departure} to ${arrival}`)
  res.send('')
})

app.get('/request', (req, res) => {
  res.send(randomList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
