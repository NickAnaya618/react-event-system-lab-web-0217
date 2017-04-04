import React from 'react'

export default class Keypad extends React.Component {
  constructor(props) {
    super(props)

    this.whatever = this.whatever.bind(this)
  }

  whatever() {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.whatever}/>
      </div>
    )
  }
}
