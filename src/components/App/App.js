import React, { useState, useEffect } from "react";

import { Route, Switch, useHistory } from "react-router-dom";
import "../../index.css";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import PageError from "../PageError/PageError.js";
import { register, login } from "../../utils/MoviesAuth.js";

function App() {
  const history = useHistory();
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const handleRegister = async (e, email, password, name) => {
    setRegisterError("");
    e.preventDefault();
    try {
      if (!email || !password || !name) {
        return alert("Нужно заполнить обязательные поля");
      }
      const res = await register({ email, password, name });
    } catch (err) {
      setRegisterError(err);
      console.error(err);
    }
  };

  const handleLogin = async (e, email, password) => {
    setLoginError("");
    e.preventDefault();
    try {
      if (!email || !password) {
        return alert("Нужно заполнить обязательные поля");
      }
      const res = await login({ email, password });
      if (res) {
        // localStorage.setItem('token', res.token);
        setLoggedIn(true);
        setUserEmail(email);
        // history.push('/');
      }
    } catch (err) {
      setLoginError(err);
      console.error(err);
    }
  };

  return (
    <>
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
          <Profile errorMessage={"текст ошибки"} />
        </Route>
        <Route exact path="/signin">
          <Login errorMessage={loginError} handleLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <Register
            errorMessage={registerError}
            handleRegister={handleRegister}
          />
        </Route>
        <Route exact path="*">
          <PageError />
        </Route>
      </Switch>
    </>
  );
}

export default App;
