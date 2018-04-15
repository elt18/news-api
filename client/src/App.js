import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'

import News from './components/News'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route
          exact path = '/'
          component = {News}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
