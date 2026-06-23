
import './App.css';
import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
import { ApolloProvider } from "@apollo/client/react";
import DisplayData from './DisplayData';
import DisplayMovies from './DisplayMovies';
function App() {
  const client = new ApolloClient({
    link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData/>
        <DisplayMovies />
      </div>
    </ApolloProvider>
  );
}

export default App;
