import {getMessagesJson,postMessagejson} from './reader.js'

import fastify from 'fastify'
const app = fastify({});

// Declare a route
app.get('/', async (request, reply) => {
  reply.send(await getMessagesJson());
})

app.put('/', async (request, reply) => {
  reply.send(await postMessagejson(request.body));
});
  
const start = async () => {
  try {
    await app.listen({ port: 1122 })
    console.log("runnig");
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()