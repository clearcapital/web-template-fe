import React, { Component, PropTypes } from 'react'

export default class Input extends Component {
  static propTypes = {
    cb: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  }

  state = {
    value: this.props.value || ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value || ''
      })
    }
  }

  handleChange = (se) => {
    const {cb, name} = this.props
    this.setState({
      value: se.target.value
    })

    if (cb) {
      cb(name, se.target.value)
    }
  }

  render () {
    const {name, type, label, placeholder} = this.props
    const {value} = this.state

    return (
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className="form-control"
          id={name}
          name={name}
          onChange={this.handleChange}
          placeholder={placeholder || ''}
          type={`${type || 'string'}`}
          value={value}
        />
      </div>
    )
  }
}
