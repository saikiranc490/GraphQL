import React from 'react'

import {gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const DisplayData = () => {
  const get_movies = gql`
    query {
      movies {
        name
        yearOfPublication
      }
    }
  `;
  const {loading, error, data} = useQuery(get_movies);

  if (loading)
    return <h1>LoadingData...</h1>

  if (error)
    return <h1>Something Failed...</h1>
  
  return (
    <div>
      <h1>Movie Data</h1>
      {data.movies.map((user) => (
        <div key={user.id}>
          <hr/>
          <p>Name: {user.name}</p> 
          <p>Age : {user.yearOfPublication}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayData