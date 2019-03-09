import React, { Component } from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import '../style/index.css'

import Home from './Home'
import Header from './Header'
import History from './History'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/historique" component={History} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
