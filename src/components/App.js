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

  render() {
    return (
      <div class='app'>
      { this.state.loading
        ? <p>Please wait...</p>
        : <User name={ this.state.user.name } image={ this.state.user.avatar_url} />
      }
      </div>
    )
  }
}
