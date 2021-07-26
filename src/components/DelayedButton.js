import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClick = (event) => {
    const target = event
    const timer = setTimeout(this.props.onDelayedClick(target), this.props.delay)
    return timer
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Delayed Button</button>
      </div>
    )
  }
}
