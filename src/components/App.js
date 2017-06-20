import { h, Component } from 'preact'

import User from './User'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'user': null,
      'loading': true
    }
  }

  componentDidMount() {
    fetch(this.props.urls.user)
      .then(r => r.json())
      .then(user => {
        this.setState({
          'loading': false,
          user
        })
      })
      .catch(console.error)
  }

  render({ urls }, { user, loading }) {
    return (
      <div class='app'>
      { loading
        ? <p>Fetching { urls.user }</p>
        : <User name={ user.name } image={ user.avatar_url} />
      }
      </div>
    )
  }
}
