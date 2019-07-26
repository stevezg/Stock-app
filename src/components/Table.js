import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreInfo: false,

      key: 0
    }
  }

  moreInfo = () => {
    if (this.state.moreInfo) {
      return <p>{this.props.stocks[this.state.key].volume}</p>
    }
  }
  handleClick = i => {
    this.setState({ key: i, moreInfo: true })

  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return (
      <div className="container">
        <div>
          <h2>Stocks</h2>
          <table>
            <tbody>
              <tr>
                <th>Stock</th>
                <th>Price</th>
                <th>Change</th>
                <th>Percent Change</th>
              </tr>
              {this.props.stocks.map((stock, i) => {
                return (
                  <tr
                    key={i}
                    data-index={i}
                    onClick={() => this.handleClick(i)}
                  >
                    <td>{stock.symbol}</td>
                    <td>{stock.price}</td>
                    <td>{stock.change}</td>
                    <td>{stock.changePercent}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div>
          {this.state.moreInfo && (
            <div>
              <div style={{ display: 'inline-flex' }}>
                <h3>More Info</h3>
                <button
                  style={{
                    height: '30px',
                    marginTop: '20px',
                    width: '100px',
                    marginlLeft: '10px'
                  }}
                  onClick={this.handleToggle}
                >
                  Collapse
                </button>
              </div>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  Volume: {this.props.stocks[this.state.key].volume} shares
                </li>
<<<<<<< HEAD
                <li>Open: <span className="bold" >{this.props.stocks[this.state.key].open}</span></li>
                <li>High: <span className="bold" >{this.props.stocks[this.state.key].high}</span></li>
                <li>Low: <span className="bold" >{this.props.stocks[this.state.key].low}</span></li>
                <li>previousClose: <span className="bold" >{this.props.stocks[this.state.key].previousClose}</span></li>
=======
                <li>Open: {this.props.stocks[this.state.key].open}</li>
                <li>High: {this.props.stocks[this.state.key].high}</li>
                <li>Low: {this.props.stocks[this.state.key].low}</li>
                <li>previousClose: {this.props.stocks[this.state.key].previousClose}</li>
>>>>>>> parent of b6e54ae... styling button
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
