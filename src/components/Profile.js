import { h, Component } from 'preact'

import User from './User'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'user': null,
      'loading': true
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user}`)
      .then(r => r.json())
      .then(user => {
        this.setState({
          'loading': false,
          user
        })
      })
      .catch(console.error)
  }

  render({}, { user, loading }) {
    return (
      <div class='app'>
      { loading
        ? <p>Fetching...</p>
        : <User name={ user.name } image={ user.avatar_url} />
      }
      </div>
    )
  }
}
