import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('oi olá')

  return response.end()
})

server.listen(3333)