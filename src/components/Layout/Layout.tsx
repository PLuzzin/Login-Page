import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "../../components/Login/Login";
import Slider from "../../components/Slider/Slider";
import Signup from "../../components/Signup/Signup";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Dashboard from "../../components/Dashboard/Dashboard";
import About from '../../components/About/About';
import TopNav from '../../components/TopNav/TopNav';

import "./Layout.css";

type User = {
  username: string;
  password: string;
};

let user: User = {
  username: "test",
  password: "1234",
};

const Layout: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Verify if login key is on localStorage
    const isLogged = localStorage.getItem('login');
    // const isLogged = JSON.parse(localStorage.getItem('login') || '');
    
    // if it is on localstorage: user still logado.
    if(isLogged)
      // loads dashboard component
      setIsLoggedIn(true);
    
  },[isLoggedIn]);

  const handleUsername = (e: React.FormEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
    // hide error message
    setIsValid(false);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    // hide error message
    setIsValid(false);
  };

  const handleLogout = () => {
    // loads login component
    setIsLoggedIn(false);
    // hide error message
    setIsValid(false);
    // resets login/password
    setUsername('');
    setPassword('');
    // remove key from localStorage
    localStorage.removeItem('login');
    // localStorage.setItem('login', JSON.stringify(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user.username === username && user.password === password)
      // loads dashboard component
      setIsLoggedIn(true);
      // user is logged in
      localStorage.setItem('login', JSON.stringify(true));

    // show error message  
    setIsValid(true); 
     
  };

  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {isLoggedIn ? (
                <main>
                  <header></header>
                  <aside></aside>
                  <article>
                    <TopNav handleLogout={handleLogout} />
                    <Outlet />
                  </article>
                  <footer></footer>
                </main>
              ) : (
                <main>
                  <div id="layout-left">
                    <Outlet />
                  </div>
                  <div id="layout-right">
                    <Slider />
                  </div>
                </main>)
              }
            </div>
          }
        >
          <Route
            path="/"
            element={
              <div>
                {isLoggedIn ? (
                  <Dashboard isLoggedIn={isLoggedIn} />
                ) : (
                  <Login
                    handleSubmit={handleSubmit}
                    handleUsername={handleUsername}
                    handlePassword={handlePassword}
                    isValid={isValid}
                  />
                )}
              </div>
            }
          />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          
          <Route path="dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="about" element={<About isLoggedIn={isLoggedIn} />} />
          
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
