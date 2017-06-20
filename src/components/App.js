import { h, Component } from 'preact'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'text': ''
    }

    this.setText = this.setText.bind(this)
    this.submit = this.submit.bind(this)
  }

  setText(e) {
    this.setState({
      'text': e.target.value
    })
  }

  submit() {
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.submit } action="">
          <input type="text" value={ this.state.text } onInput={ this.setText } />
        </form>

        <pre>
          <code>{ JSON.stringify(this.state, null, 2) }</code>
        </pre>
      </div>
    )
  }
}
