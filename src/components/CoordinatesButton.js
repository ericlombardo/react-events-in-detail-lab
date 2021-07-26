import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  /* takes in onReceiveCoordinates prop (function that logs what is passed into it)*/
  
  sendCoordinates = (e) => {
    return this.props.onReceiveCoordinates([e.clientX, e.clientY]) 
  }

  render () {
    return (
      <div>
        <button onClick={this.sendCoordinates}>
        Coordinates Button
        </button>
      </div>
    )
  }
}
