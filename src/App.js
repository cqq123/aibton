import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import style from './app.scss';
import Login from './scenes/Login';
import ServerMain from './scenes/ServerMain';


const App = () => (
  <BrowserRouter>
    <div className={style.content}>
      <Route exact path="/login" component={Login} />
      <Route path="/server" component={ServerMain} />
    </div>
  </BrowserRouter>
);

export default App;
