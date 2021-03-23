const http = require ('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-type': 'text/html' });
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })
})

const portName = 1234

server.listen(portName, function(error){
  if(error) {
    console.log('Something is wrong...')
  } else {
  console.log(`Listening on port ${portName}`)
  }
})
