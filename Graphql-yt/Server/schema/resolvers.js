const { UserList, MovieList }  = require("../fakeData")
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id
      const foundUser = _.find(UserList, {id: Number(id)});
      return foundUser;
    },
    movies: () => {
      return MovieList
    },
    movie :(parent, args) => {
      const movieName = args.name;
      const foundMovie = _.find(MovieList, {name: movieName})
      return foundMovie;
    }
  },
  User: {
    favouriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => 
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
    }
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastid = UserList[UserList.length - 1].id
      const newId = lastid + 1;
      user.id = newId;
      UserList.push(user);
      console.log(user);
      return user;
    },
    updateUserName: (parent, args) => {
      const username = args.input.username;
      const id = args.input.id;
      const existingUser = _.find(UserList, {id: Number(id)});
      existingUser.username = username;
      return existingUser;
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      console.log(49, args.id)
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    }
  }
}

module.exports = {resolvers};