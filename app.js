const express = require('express')
const app = express()

const { PORT = 3000 } = process.env

// app.get('/', function(req, res){
//   res.send('Hello World from Express!')
// })

require('coffee-script/register')
const router = require('./routes')

app.use('/api', router.api);
app.use((err, req, res, next) => {
  res.end('error');
})

console.log('listening on %s', PORT)
app.listen(PORT)