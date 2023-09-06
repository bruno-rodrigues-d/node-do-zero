// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write('oi olá')

//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello world'
})

server.listen({
  port: 3333,
})