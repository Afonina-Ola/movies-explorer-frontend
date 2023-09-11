import React, { useState, useEffect } from "react";

import { Route, Switch, useHistory } from "react-router-dom";
import "../../index.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import PageError from "../PageError/PageError.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  register,
  login,
  checkToken,
  getUserData,
  editUserData,
} from "../../utils/MainApi.js";

function App() {
  const history = useHistory();

  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [profileEditError, setProfileEditError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const handleRegister = async (e, email, password, name) => {
    setRegisterError("");
    e.preventDefault();
    try {
      if (!email || !password || !name) {
        return alert("Нужно заполнить обязательные поля");
      }
      const res = await register({ email, password, name });
      if (res) {
        handleLogin(e, email, password);
      }
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
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        history.push("/movies");
      }
    } catch (err) {
      setLoginError(err);
      console.error(err);
    }
  };

  const handleProfileFormSubmit = (e, userData) => {
    e.preventDefault();
    editUserData(userData)
      .then((data) => {
        setCurrentUser(data);
        alert("Данные пользователя обновлены");
      })
      .catch((err) => {
        setProfileEditError(err);
      });
  };

  // Проверка токена
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((data) => {
          setLoggedIn(true);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // Данные пользователя
  useEffect(() => {
    if (!loggedIn) return;
    getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  if (loading) {
    return "...Loading";
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={<Movies loggedIn={loggedIn} />}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={<SavedMovies loggedIn={loggedIn} />}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={
              <Profile
                onProfileFormSubmit={handleProfileFormSubmit}
                errorMessage={profileEditError}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route exact path="/signin">
            <Login
              loggedIn={loggedIn}
              errorMessage={loginError}
              handleLogin={handleLogin}
            />
          </Route>
          <Route exact path="/signup">
            <Register
              loggedIn={loggedIn}
              errorMessage={registerError}
              handleRegister={handleRegister}
            />
          </Route>
          <Route exact path="*">
            <PageError />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
