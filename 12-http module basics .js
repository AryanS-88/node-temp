const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our Home page')
  }
  if (req.url === '/about') {
    res.end('welcome to our about page')
  }
  res.end(`<h1>OOPS!</h1>
  <p>cannot locate your page </p>
  <a href="/"> back to home</a>`)
})

server.listen(5000)
