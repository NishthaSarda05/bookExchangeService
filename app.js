const http = require('http')
const port = 3000

const server = http.createServer(function(req, resp){
resp.writeHead(200, {'content-type': 'test/html'})
bp 
 resp.write('Hello Node')
 resp.end()

})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    }
    else{
        console.log('server is listening on port' + port)
    }
})
