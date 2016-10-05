import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exampleActionSync, exampleActionAsync } from '../../actions/exampleAction'

class App extends Component {
  static get displayName () {
    return 'App'
  }

  static propTypes () {
    return {
      exampleActionSync: PropTypes.func.isRequired,
      exampleActionAsync: PropTypes.func.isRequired,
      exampleMessage: PropTypes.string
    }
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleClick (isSyncAction) {
    const { exampleActionSync, exampleActionAsync } = this.props

    if (isSyncAction) {
      exampleActionSync()
    } else {
      exampleActionAsync()
    }
  }

  render () {
    const { exampleMessage } = this.props

    return (
      <div>
        <h1>App</h1>
        <p>{ exampleMessage }</p>
        <button onClick={this.handleClick.bind(this, true)}>Sync Click</button>
        <button onClick={this.handleClick.bind(this, false)}>Async Click</button>
      </div>
    )
  }
}

// action creators to manipulate redux store
// We map these actions onto the props for a component
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    exampleActionSync,
    exampleActionAsync
  }, dispatch)
}

// redux store flowing into your module
function mapStateToProps (state) {
  console.log('REDUX STATE:', state)

  return {
    exampleMessage: state.example
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
