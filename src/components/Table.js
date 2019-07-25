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
        <div className="subContainer">
          {this.state.moreInfo && (
            <div>
              <div style={{ display: 'inline-flex' }}>
                <h4>More Info</h4>
                <button className='toggleBtn' onClick={this.handleToggle}>
                  Collapse
                </button>
              </div>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  Volume: <span className="bold">{this.props.stocks[this.state.key].volume}</span>
                </li>
                <li>Open: <span className="bold">{this.props.stocks[this.state.key].open}</span></li>
                <li>High:<span className="bold">{this.props.stocks[this.state.key].high}</span></li>
                <li>Low: <span className="bold">{this.props.stocks[this.state.key].low}</span></li>
                <li>
                  previousClose: <span className="bold">{this.props.stocks[this.state.key].previousClose}</span>
                </li>
              </ul>
            </div>
          )}
          {this.state.moreInfo && !this.state.toggle && (
            <div style={{ display: 'inline-flex' }}>
              <h4>More Info</h4>
              <button className='toggleBtn' onClick={this.handleToggle}>
                Expand
              </button>
            </div>
          )}
        </div>
        <div className="subContainer">
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
                    <td><span>{stock.symbol}</span></td>
                    <td><span className="bold">{stock.price}</span></td>
                    <td><span className="bold">{stock.change}</span></td>
                    <td><span className="bold">{stock.changePercent}</span></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
