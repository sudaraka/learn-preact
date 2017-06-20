import { h, render } from 'preact'

import App from './components/App'

const
  config = {
    'urls': {
      'user': 'https://api.github.com/users/sudaraka'
    }
  }

render(<App { ...config } />, document.querySelector('main'))
