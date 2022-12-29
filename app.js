import {getMessagesJson,postMessagejson} from './reader.js'

import fastify from 'fastify'
const app = fastify({});

// Declare a route
app.get('/', async (request, reply) => {
  reply.send(await getMessagesJson());
})

app.post('/', async (request, reply) => {
  await postMessagejson()
  console.log(request.body);
})
  
const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()