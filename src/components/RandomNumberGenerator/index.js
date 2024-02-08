// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1 className="h1">Random Number</h1>
          <p className="p1">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateNumber}
            className="button"
            type="button"
          >
            Generate
          </button>
          <p className="p2">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
