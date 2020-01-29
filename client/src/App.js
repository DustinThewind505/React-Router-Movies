import React, { useState } from "react";
import { Route } from "react-router-dom";

import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
//import { runInContext } from "vm";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {console.log('Butthole')}
      
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;