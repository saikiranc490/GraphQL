import cors from 'cors';
import express from 'express';
import { authMiddleware, handleLogin } from './auth.js';
import {ApolloServer} from '@appolo/server';

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

const apollorServer = new ApolloServer({/* typeDefs, resolvers */})

await apollorServer.start();

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
