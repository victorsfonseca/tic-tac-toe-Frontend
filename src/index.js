import React from 'react';
import ReactDOM from 'react-dom';
import GamePage from './Pages/GamePage/GamePage'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './GlobalState/Store'
import GlobalStyle from './Styles/GlobalStyle'


ReactDOM.render(
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Provider store={store}><Route path='/' exact component={GamePage} /></Provider>
      </Switch>
    </BrowserRouter>
  ,
  document.getElementById('root')
);