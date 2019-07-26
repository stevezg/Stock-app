import React, { Component } from 'react'
// import apiKey from '../config/alphaVantage'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      err: '',
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
  isEnabled = stock => {
    return !(stock.length > 0 && stock.length <= 5)
  }
  setData = () => {
    this.getStockAsync(this.state.symbol).then(data => {
      if (data['Global Quote']['05. price']) {
        this.setState(
          {
            price: data['Global Quote']['05. price'],
            open: data['Global Quote']['02. open'],
            previousClose: data['Global Quote']['08. previous close'],
            volume: data['Global Quote']['06. volume'],
            change: data['Global Quote']['09. change'],
            changePercent: data['Global Quote']['10. change percent'],
            low: data['Global Quote']['04. low'],
            high: data['Global Quote']['03. high']
          },
          () => this.props.updateStocks(this.state)
        )
      }
      else {
        this.setState({err:"please enter a valid stock"})
      }
    })
  }
  getStockAsync = async name => {
    try {
      let response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=XOJSLIXCKGQBGHGX`
      )
      let data = await response.json()
      return data
    } catch (err) {
      this.setState({ err: err.message })
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            placeholder='Enter Stock'
            value={this.state.symbol}
            onChange={this.handleStockChange}
          />
          <br />
          <button
            type='submit'
            onClick={this.onSubmit}
            value={this.state.symbol}
            style={{ width: '140px' }}
            disabled={this.isEnabled(this.state.symbol)}
          >
            Add New Stock
          </button>
        </form>
        <p style={{ color: 'goldenrod' }}>{this.state.err}</p>
      </div>
    )
  }
}
