const {gql} = require('apollo-server');

const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    age: Int!
    username: String!
    nationality: Nationality!
    friends: [User!]
    favouriteMovies: [Movie!]!
  }

  type Movie {
    name: String!,
    id: ID!,
    yearOfPublication: Int!,
    isInTheaters: Boolean!
  }


  input CreateUserInput {
    name: String!
    age: Int!
    username: String!
    nationality: Nationality = BRAZIL
  }
  input updateUserNameInput {
    id : ID!
    username: String,
  }
  type Mutation {
    createUser(input: CreateUserInput): User
    updateUserName(input: updateUserNameInput): User
    deleteUser(id: ID!): User
  }
  type Query {
    users: [User!]!,
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum Nationality {
    INDIA
    BRAZIL
    CANADA
    GERMANY
    CHILE
  }
`

module.exports = {typeDefs};