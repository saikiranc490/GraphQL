const {ApolloServer} = require("apollo-server");

const {typeDefs} = require('./schema/typeDefs');
const {resolvers} = require('./schema/resolvers')
const server = new ApolloServer({typeDefs, resolvers, context: () => {
    return "Sai Kiran"
  }})

server.listen().then((req, res) => {
  console.log("Your api is running at :" + req.url);
})