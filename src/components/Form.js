import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state={symbol:''}
  }
  handleStockChange = (e) => {
    this.setState({symbol:e.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  render() {
    return (
      <form>
         <input
         placeholder='Enter Stock'
         value={this.state.symbol}
         onChange={this.handleStockChange}

        />
        <button
        type="button"
        onClick={this.onSubmit}
        value={this.state.symbol}
        style={{ width: '100px' }}>Add New Stock</button>
      </form>
    )
  }
}
