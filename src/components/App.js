import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from './Home'
import Profile from './Profile'
import ErrRoute from './ErrRoute'

export default class App extends Component {
  render() {
    return (
      <div class='app'>
        <Router>
          <Home path='/' />
          <Profile path='/profile/:user' />
          <ErrRoute default />
        </Router>
      </div>
    )
  }
}
