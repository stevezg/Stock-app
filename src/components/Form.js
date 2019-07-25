import React, { Component } from 'react'
// import apiKey from '../config/alphaVantage'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbol: '',
      price: '',
      open: '',
      previousClose: '',
      volume: '',
      change: '',
      changePercent: '',
      high: '',
      low: ''
    }
  }
  handleStockChange = e => {
    this.setState({ symbol: e.target.value.toUpperCase() })
  }
  onSubmit = async event => {
    event.preventDefault()
    this.setData()
  }

  setData = () => {
    this.getStockAsync(this.state.symbol).then(data =>
      this.setState(
        {
          price: data['Global Quote']['05. price'],
          open: data['Global Quote']['02. open'],
          previousClose: data['Global Quote']['08. previous close'],
          volume: data['Global Quote']['06. volume'],
          change: data['Global Quote']['09. change'],
          changePercent: data['Global Quote']['10. change percent'],
          high: data['Global Quote']['03. high'],
          low: data['Global Quote']['02. low']
        },
        () => this.props.updateStocks(this.state)
      )
    )
  }

  getStockAsync = async name => {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=XOJSLIXCKGQBGHGX`
    )
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
        <br/>
        <button
          type='submit'
          onClick={this.onSubmit}
          value={this.state.symbol}
          style={{ width: '140px' }}
        >
          Add New Stock
        </button>
      </form>
    )
  }
}
