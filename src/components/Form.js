import React, { Component } from 'react'
// import apiKey from '../config/alphaVantage'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state={symbol:''}
  }
  handleStockChange = e => {
    this.setState({symbol:e.target.value})
  }
  onSubmit = event => {
    event.preventDefault()

    this.getStockAsync(this.state.symbol).then(data => console.log(data) )
  }

  getStockAsync = async name => {
    let response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=XOJSLIXCKGQBGHGX`)
    let data = await response.json()
    return data
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
        type="submit"
        onClick={this.onSubmit}
        value={this.state.symbol}
        style={{ width: '100px' }}>Add New Stock</button>
      </form>
    )
  }
}
