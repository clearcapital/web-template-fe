import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exampleActionSync, exampleActionAsync } from '../../actions/exampleAction'

const mapStateToProps = state => ({
  message: state.example.message
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  exampleActionSync,
  exampleActionAsync
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    exampleActionSync: PropTypes.func.isRequired,
    exampleActionAsync: PropTypes.func.isRequired,
    message: PropTypes.string,
    children: PropTypes.node
  }

  state = {}

  handleClick = (isSyncAction) => {
    const { exampleActionSync, exampleActionAsync } = this.props

    if (isSyncAction) {
      exampleActionSync()
    } else {
      exampleActionAsync()
    }
  }

  render () {
    const { message } = this.props
    const imgSrc = require('./lorem-image.jpg')
    const videoSrc = require('./lorem-video.mp4')

    return (
      <div>
        <h1>App</h1>
        <div>
          <button onClick={this.handleClick.bind(this, true)}>Sync Click</button>
          <button onClick={this.handleClick.bind(this, false)}>Async Click</button>
        </div>
        <p>{message}</p>
        <p>{this.props.children}</p>
        <hr/>
        <img src={imgSrc} width="400px" />
        <video src={videoSrc} width="400px" autoPlay loop muted></video>
      </div>
    )
  }
}
