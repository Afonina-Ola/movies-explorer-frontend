import React from 'react';

import { Route, Switch } from 'react-router-dom';
import '../../index.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import PageError from '../PageError/PageError.js';

function App() {
  return (
    < >
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile errorMessage={'текст ошибки'} />
        </Route>
        <Route exact path="/signin">
          <Login errorMessage={''} />
        </Route>
        <Route exact path="/signup">
          <Register errorMessage={''} />
        </Route>
        <Route exact path="*">
          <PageError />
        </Route>
      </Switch>
    </>
  );
}

export default App; 