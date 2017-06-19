import { h } from 'preact'

import User from './User'

const
  USERS = [
    {
      'image': 'https://avatars0.githubusercontent.com/u/470827?v=3&s=46',
      'name': 'Sudaraka Wijesinghe'
    },
    {
      'image': 'https://avatars0.githubusercontent.com/u/1643522?v=3&s=46',
      'name': 'Shane Osbourne'
    },
    {
      'image': 'https://avatars0.githubusercontent.com/u/170270?v=3&s=46',
      'name': 'Sindre Sorhus'
    }
  ]

export default () => (
  <div class='app'>
  { USERS.map(user => <User key={ user.name } { ...user } />) }
  </div>
)
