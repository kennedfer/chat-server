import {getMessagesJson,postMessagejson} from './reader.js'
import dotenv from 'dotenv'
import fastify from 'fastify'
const app = fastify({});
dotenv.config();
// Declare a route
app.get('/', async (request, reply) => {
  reply.send(await getMessagesJson());
})

app.put('/', async (request, reply) => {
  reply.send(await postMessagejson(request.body));
});
  
const start = async () => {
  try {
    await app.listen({ port: process.env.PORT | 3000})
    console.log("runnig");
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()