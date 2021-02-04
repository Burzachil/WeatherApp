import React from 'react'
import './App.scss'
import HomePage from './containers/HomePage/HomePage'
import store from "./store"
import {Provider} from "react-redux"

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <HomePage />
          </div>
      </Provider>

  );
}

export default App
